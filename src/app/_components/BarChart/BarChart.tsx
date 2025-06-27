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

interface BarChartProps {
  data: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const BarChart = ({ data, options = {} }: BarChartProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Register ChartJS components only on client side
    ChartJS.register(
      BarController,
      BarElement,
      CategoryScale,
      LinearScale,
      Title,
      Tooltip,
      Legend
    );
    setIsInitialized(true);

    // Cleanup function to avoid memory leaks
    return () => {
      ChartJS.unregister(
        BarController,
        BarElement,
        CategoryScale,
        LinearScale,
        Title,
        Tooltip,
        Legend
      );
    };
  }, []);

  // Complete animation disabling configuration
  const chartOptions: ChartOptions<'bar'> = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 }, // Disable all animations
    transitions: {
      active: {
        animation: { duration: 0 },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  if (!isInitialized) {
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
