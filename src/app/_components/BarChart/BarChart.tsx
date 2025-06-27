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
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components once
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

const BarChart = ({ data, options }: { data: ChartData<'bar'>; options?: ChartOptions<'bar'> }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 relative">
      <Bar 
        data={data}
        options={{
          ...options,
          animation: false,
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default BarChart;