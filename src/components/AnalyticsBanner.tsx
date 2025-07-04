import React from 'react';

const AnalyticsBanner = () => (
// Inside your <MapGlobe /> or wherever your <GlobeView /> is used

<div className="max-w-7xl mx-auto px-4 pt-6 text-center space-y-4">
  <h2 className="text-3xl font-bold text-gold font-mono">
    🌍 Live Global Incidents
  </h2>
  <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-neutralLight font-sans">
    <div className="bg-threatBlue/90 px-4 py-2 rounded-lg shadow">
      🔐 <strong>5</strong> Cyberattacks today
    </div>
    <div className="bg-alertAmber/90 px-4 py-2 rounded-lg shadow">
      🌋 <strong>2</strong> Natural Disasters reported
    </div>
    <div className="bg-adversaryRed/90 px-4 py-2 rounded-lg shadow">
      ⚔️ <strong>3</strong> Conflict zones active
    </div>
    <div className="bg-gold/90 px-4 py-2 rounded-lg shadow">
      📍 Most Affected: <strong>Eastern Europe, Middle East</strong>
    </div>
  </div>
    <div className="overflow-hidden whitespace-nowrap bg-neutralLight py-2">
    <div className="flex animate-marquee space-x-8 px-4 text-sm font-sans sm:text-base w-max">
        {[
        '🇺🇸 USA: Major data breach reported in California-based tech firm.',
        '🇹🇷 Turkey: Aftershocks continue post 2023 earthquake.',
        '🇵🇸 Gaza: Tensions escalate with airstrikes reported overnight.',
        '🌍 Global: Pandemic threat level remains moderate in Southeast Asia.',
        ].map((text, i) => (
        <span className='font-sans text-neutralDark' key={`marquee-1-${i}`}>{text}</span>
        ))}
        {[
        '🇺🇸 USA: Major data breach reported in California-based tech firm.',
        '🇹🇷 Turkey: Aftershocks continue post 2023 earthquake.',
        '🇵🇸 Gaza: Tensions escalate with airstrikes reported overnight.',
        '🌍 Global: Pandemic threat level remains moderate in Southeast Asia.',
        ].map((text, i) => (
        <span className='font-sans text-neutralDark' key={`marquee-2-${i}`}>{text}</span>
        ))}
    </div>
    </div>
</div>
);

export default AnalyticsBanner;
