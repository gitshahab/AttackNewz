import IncidentCard from "@/components/IncidentCard";
import NotFound from "@/components/NotFound";
import { mockIncidents } from "@/data/mockIncidents";
import Link from "next/link";

export default function IncidentPage({ params }: { params: { id: string } }) {
  const incident = mockIncidents.find((i) => i.id === params.id);

  if (!incident) {
    return <NotFound msgText="Incident Not Found" />;
  }
  return (
    <main className="min-h-screen px-4 py-10 max-w-7xl mx-auto">
      <Link href="/" className="text-sm font-mono hover:underline hover:text-gold mb-6 inline-block">
        ← Back to Home
      </Link>
      <IncidentCard incident={incident}/>
    </main>
  );
}
