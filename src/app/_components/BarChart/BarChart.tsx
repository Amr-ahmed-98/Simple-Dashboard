'use client';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js/auto';

// Only register on client side
if (typeof window !== 'undefined') {
  ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
  );
}

interface BarChartProps {
  data: ChartData<'bar'>;
  options: ChartOptions<'bar'>;
}

const BarChart = ({ data, options }: BarChartProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return (
      <div className='w-full h-64 flex items-center justify-center bg-gray-50 rounded'>
        <div className='text-gray-500'>Loading chart...</div>
      </div>
    );
  }

  return (
    <div className='w-full h-64 relative'>
      <Bar
        data={data}
        options={{
          ...options,
          animation: false, // Disable animations completely
          responsive: true,
          maintainAspectRatio: false,
          // Add these to prevent animation-related errors
          transitions: {
            active: {
              animation: { duration: 0 },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
