
'use client';

import { useEffect, useState } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { RULES } from '@/data/rules';
import { DomainScore } from '@/types/pli';

export function PliRadarChart({ scores }: { scores: DomainScore[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const data = RULES.map(rule => ({
    rule: rule.shortTitle,
    value: scores.find(s => s.ruleId === rule.id)?.adjusted ?? 0,
  }));

  return (
    <div className="mx-auto w-full max-w-[360px] sm:max-w-none">
      <div className="h-[260px] w-full sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius={isMobile ? '58%' : '70%'} margin={{ top: isMobile ? 8 : 16, right: isMobile ? 8 : 18, bottom: isMobile ? 8 : 12, left: isMobile ? 8 : 18 }}>
            <PolarGrid stroke="#DEE5E2" />
            <PolarAngleAxis dataKey="rule" tick={{ fill: '#667885', fontSize: isMobile ? 10 : 12 }} />
            <Radar dataKey="value" stroke="#195A63" fill="#195A63" fillOpacity={0.28} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
