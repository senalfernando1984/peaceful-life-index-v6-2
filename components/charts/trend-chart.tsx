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
    <div className="h-40 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 6, right: isMobile ? 4 : 14, left: isMobile ? -24 : 0, bottom: isMobile ? 24 : 8 }}>
          <CartesianGrid stroke="#E7ECE9" strokeDasharray="4 4" />
          <XAxis
            dataKey="label"
            tick={{ fill: '#667885', fontSize: isMobile ? 9 : 12 }}
            interval="preserveStartEnd"
            angle={isMobile ? -18 : 0}
            textAnchor={isMobile ? 'end' : 'middle'}
            height={isMobile ? 38 : 30}
          />
          <YAxis domain={[0, 10]} tick={{ fill: '#667885', fontSize: isMobile ? 9 : 12 }} width={isMobile ? 24 : 40} />
          <Tooltip />
          <Line dataKey="pli" type="monotone" stroke="#195A63" strokeWidth={3} dot={{ r: isMobile ? 3 : 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
