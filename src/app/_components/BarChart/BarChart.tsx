'use client';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';

// Register Chart.js components once
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const defaultData: ChartData<'bar'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Sample Data',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(75, 192, 192, 0.6)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    borderRadius: 8,
    barPercentage: 0.4,
    categoryPercentage: 0.5,
  }],
};

const defaultOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  // Disable animations to prevent cp1x errors
  animation: false,
  // Alternative: Use simple animation config
  // animation: {
  //   duration: 0,
  // },
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const BarChart = ({ data = defaultData, options = defaultOptions }: BarChartProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until component is mounted on client
  if (!isMounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    // Ensure animation is always disabled or properly configured
    animation: options?.animation !== undefined ? options.animation : false,
  };

  return (
    <div className="w-full h-64 relative">
      <Bar 
        data={data}
        options={mergedOptions}
      />
    </div>
  );
};

export default BarChart;