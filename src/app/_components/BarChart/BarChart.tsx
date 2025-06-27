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
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components only on client side
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
  options?: ChartOptions<'bar'>;
}

const BarChart = ({ data, options = {} }: BarChartProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Complete animation disabling configuration
  const chartOptions: ChartOptions<'bar'> = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 0, // General animation time
    },
    transitions: {
      active: {
        animation: { duration: 0 }, // Duration when active
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (!isBrowser) {
    return (
      <div className='w-full h-64 flex items-center justify-center bg-gray-50 rounded'>
        <div className='text-gray-500'>Loading chart...</div>
      </div>
    );
  }

  return (
    <div className='w-full h-64 relative'>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default BarChart;
