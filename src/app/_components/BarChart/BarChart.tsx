// src/components/BarChart.tsx
'use client';

import { Bar } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import '../../../lib/chart';
import { useEffect, useState } from 'react';

interface BarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

export default function BarChart({ data, options = {} }: BarChartProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  // merge in our "disable animations" defaults
  const mergedOptions: ChartOptions<'bar'> = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    transitions: {
      active: { animation: { duration: 0 } },
    },
    plugins: {
      legend: { display: false },
      ...(options.plugins ?? {}),
    },
  };

  return (
    <div className='w-full h-64'>
      <Bar data={data} options={mergedOptions} />
    </div>
  );
}
