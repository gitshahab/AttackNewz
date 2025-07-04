import React from 'react'
import type { Incident } from '@/types/incidents'
import Image from 'next/image';

type Props = {
  incident: Incident;
};

const IncidentCard = ({incident} : Props) => {
    const img = incident.imgUrl || "/defaultImg.jpg"
  return (
    <div className="space-y-4">
    <h1 className="text-3xl font-mono font-bold text-gold">{incident.title}</h1>
    <div className="text-sm font-mono lg:flex items-center gap-4"> 
        <p className="underline"><strong>On:</strong> {new Date(incident.date).toDateString()}</p>
        <p className="bg-gold p-1 rounded-lg text-white mt-1 lg:mt-0 w-fit">{incident.type}</p>
        <p className="bg-threatBlue p-1 rounded-lg text-white mt-1 lg:mt-0 w-fit"><strong>Location:</strong> {incident.country} </p>
        <p className="bg-adversaryRed p-1 rounded-lg text-white mt-1 lg:mt-0 w-fit"><strong>Severity:</strong> {incident.severity} </p>
    </div>
    <div className="lg:flex items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-[45%]">
            <Image
            src={img}
            alt={incident.title}
            width={500}
            height={400}
            className="w-full h-auto max-h-[500px] rounded-xl shadow-md object-cover"
            />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[55%] mt-6 lg:mt-0">
            <p className="text-base font-sans leading-relaxed">
            {incident.description}
            </p>
        </div>
    </div>
    </div>
  )
}

export default IncidentCard