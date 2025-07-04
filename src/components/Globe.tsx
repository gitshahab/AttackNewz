"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as topojson from "topojson-client";
import { mockIncidents } from "@/data/mockIncidents";
import { Incident, IncidentType } from "@/types/incidents";

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
      const Globe = (await import("globe.gl")).default;

      const res = await fetch(
        "https://unpkg.com/world-atlas@2/countries-110m.json"
      );
      const world = await res.json();
      const countries = topojson.feature(
        world,
        world.objects.countries
      ).features;

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

      const enrichedCountries = countries.map((feature: any) => {
        const countryName = feature.properties.name;
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

      const globeInstance = Globe()(globeRef.current!)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .backgroundColor("rgba(0,0,0,0)")
        .polygonsData(enrichedCountries)
        .polygonCapColor((feat: any) =>
          feat.properties.isAffected
            ? incidentColors[feat.properties.incidentType as IncidentType] ||
              "rgba(253, 93, 0, 0.7)"
            : "rgba(255,255,255,0.03)"
        )
        .polygonSideColor(() => "rgba(0, 100, 0, 0.1)")
        .polygonStrokeColor(() => "#444")
        .polygonAltitude((feat: any) =>
          feat.properties.isAffected ? 0.003 : 0.002
        )
        .ringsData(mockIncidents)
        .ringColor((d: Incident) =>
          incidentColors[d.type] || "rgba(255,255,255,0.6)"
        )
        .ringAltitude(0.01)
        .ringMaxRadius(5)
        .ringPropagationSpeed(2)
        .ringRepeatPeriod(1000)
        .pointsData(mockIncidents)
        .pointLat((d: Incident) => d.lat)
        .pointLng((d: Incident) => d.lng)
        .pointAltitude(() => 0.01)
        .pointColor((d: Incident) =>
          incidentColors[d.type] || "rgba(255,255,255,0.8)"
        )
        .pointRadius(() => 1.5)
        .onPointHover((incident: Incident | null) => {
          setHoveredIncident(incident);
        })
        .onPointClick((incident: Incident) => {
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