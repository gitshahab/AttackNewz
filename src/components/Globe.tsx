"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as topojson from "topojson-client";
import { mockIncidents } from "@/data/mockIncidents";
import { Incident, IncidentType } from "@/types/incidents";
import type { Feature, Geometry, GeoJsonProperties, GeometryObject } from 'geojson';


export default function GlobeView() {
  const globeRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [hoveredIncident, setHoveredIncident] = useState<Incident | null>(
    null
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const load = async () => {
      const globeFactory = (await import("globe.gl")).default;

      const res = await fetch(
        "https://unpkg.com/world-atlas@2/countries-110m.json"
      );
      const world = await res.json();

      const result = topojson.feature(world, world.objects.countries);
      let countryFeatures: Feature<Geometry, GeoJsonProperties>[];
      if ('features' in result) {
        countryFeatures = result.features as Feature<Geometry, GeoJsonProperties>[];
      } else {
        countryFeatures = [result];
      }

      const incidentColors: Record<IncidentType, string> = {
        Cyberattack: "rgba(230, 57, 70, 0.8)",
        "Natural Disaster": "rgba(44, 132, 216, 0.8)",
        "Political Unrest": "rgba(183, 28, 28, 0.8)",
        "War Event": "rgba(0, 150, 136, 0.8)",
        Pandemic: "rgba(255, 87, 34, 0.8)",
        "Infrastructure Failure": "rgba(156, 39, 176, 0.8)",
        "Geopolitical Conflict": "rgba(252, 96, 0, 0.8)",
        "Environmental Crisis": "rgba(255, 193, 7, 0.8)",
        "Security Breach": "rgba(63, 81, 181, 0.8)",
      };

      const enrichedCountries = countryFeatures.map((feature: Feature<GeometryObject>) => {
        const countryName = feature?.properties?.name;
        const incident = mockIncidents.find(
          (i) => i.country === countryName
        );
        return {
          ...feature,
          properties: {
            ...feature.properties,
            isAffected: !!incident,
            incidentType: incident?.type || null,
          },
        };
      });

      const globeInstance = new globeFactory(globeRef.current!);
        globeInstance.globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .polygonsData(enrichedCountries)
        .polygonCapColor((feat: object) => {
          const feature = feat as { properties?: { isAffected?: boolean; incidentType?: IncidentType } };
            return feature.properties?.isAffected
              ? incidentColors[feature.properties.incidentType as IncidentType] ||
                "rgba(253, 93, 0, 0.7)"
              : "rgba(255,255,255,0.03)";
          })
        .polygonSideColor(() => "rgba(0, 100, 0, 0.1)")
        .polygonStrokeColor(() => "#444")
        .polygonAltitude((feat: object) => {
          const feature = feat as { properties?: { isAffected?: boolean } };
          return feature.properties?.isAffected ? 0.003 : 0.002;
        })
        .ringsData(mockIncidents)
        .ringColor(() => {
          const type = mockIncidents[0].type as IncidentType;
          return incidentColors[type] || "rgba(255,255,255,0.6)";
        })
        .ringAltitude(0.01)
        .ringMaxRadius(7)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1000)
        .pointsData(mockIncidents)
        .pointLat((obj: object) => (obj as Incident).lat)
        .pointLng((obj: object) => (obj as Incident).lng)
        .pointAltitude(() => 0.01)
        .pointRadius((obj: object) => {
          const incident = obj as Incident;
          return hoveredIncident && incident.id === hoveredIncident.id ? 3 : 2;
        })
        .pointColor((obj: object) => {
          const incident = obj as Incident;
          return incidentColors[incident.type as IncidentType] || "rgba(255,255,255,0.8)";
        })
        .onPointHover((obj: object | null) => {
          const incident = obj as Incident | null;
          setHoveredIncident(incident);
        })
        .onPointClick((obj: object) => {
          const incident = obj as Incident;
          router.push(`/incident/${incident.id}`);
        });
    };

    load();
  }, [router]);

  return (
    <>
      <div ref={globeRef} style={{ width: "100%", height: "100vh" }} />
      {hoveredIncident && (
        <div
          className="fixed z-[9999] px-3 py-1.5 text-xs rounded-md bg-black text-white pointer-events-none transition-opacity duration-100"
          style={{ top: mousePos.y + 15, left: mousePos.x + 15 }}
        >
          <p className="font-semibold">{hoveredIncident.title}</p>
          <p className="text-[10px]">{hoveredIncident.country}</p>
          <p className="text-[10px] italic text-gray-300">
            {hoveredIncident.type}
          </p>
        </div>
      )}
    </>
  );
}