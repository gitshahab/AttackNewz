import IncidentCard from "@/components/IncidentCard";
import NotFound from "@/components/NotFound";
import { mockIncidents } from "@/data/mockIncidents";
import Link from "next/link";

import { Incident, IncidentType } from '@/types/incidents';
const incidents: Incident[] = mockIncidents.map(data => ({
  ...data,
  type: data.type as IncidentType,
  severity: data.severity as 'Low' | 'Medium' | 'High',
}));

interface IncidentPageProps {
  params: Promise<{ id: string }>;
}

export default async function IncidentPage({ params }: IncidentPageProps) {
  const { id } = await params;
  const incident = incidents.find((i) => i.id === id);

  if (!incident) {
    return <NotFound msgText="Incident Not Found" />;
  }
  return (
    <main className="min-h-screen px-4 py-10 max-w-7xl mx-auto mt-10">
      <Link href="/" className="text-sm font-mono hover:underline hover:text-gold mb-6 inline-block">
        ← Back to Home
      </Link>
      <IncidentCard incident={incident}/>
    </main>
  );
}
