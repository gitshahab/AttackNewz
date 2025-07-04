import IncidentCard from '@/components/IncidentCard';
import { mockIncidents } from '@/data/mockIncidents';
import Link from 'next/link';

import { Incident, IncidentType } from '@/types/incidents';
const incidents: Incident[] = mockIncidents.map(data => ({
  ...data,
  type: data.type as IncidentType,
  severity: data.severity as 'Low' | 'Medium' | 'High',
}));

const Pandemics = () => {
  const pandemicsIncident = incidents.filter(i => i.type === 'Pandemic');

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-bold font-mono mb-6">Pandemic</h1>
        <Link href="/" className="text-sm font-mono hover:underline hover:text-gold mb-6 inline-block">
        ← Back to Home
        </Link>
      </div>
      <div className="grid gap-4">
        {pandemicsIncident.map(incident => (
          <IncidentCard key={incident.id} incident={incident} />
        ))}
      </div>
    </main>
  );
};

export default Pandemics;
