'use client';

import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function TrendChart({ data }: { data: Array<{ label: string; pli: number }> }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="h-56 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: isMobile ? 6 : 14, left: isMobile ? -20 : 0, bottom: isMobile ? 18 : 8 }}>
          <CartesianGrid stroke="#E7ECE9" strokeDasharray="4 4" />
          <XAxis
            dataKey="label"
            tick={{ fill: '#667885', fontSize: isMobile ? 10 : 12 }}
            interval="preserveStartEnd"
            angle={isMobile ? -18 : 0}
            textAnchor={isMobile ? 'end' : 'middle'}
            height={isMobile ? 42 : 30}
          />
          <YAxis domain={[0, 10]} tick={{ fill: '#667885', fontSize: isMobile ? 10 : 12 }} width={isMobile ? 26 : 40} />
          <Tooltip />
          <Line dataKey="pli" type="monotone" stroke="#195A63" strokeWidth={3} dot={{ r: isMobile ? 3 : 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
