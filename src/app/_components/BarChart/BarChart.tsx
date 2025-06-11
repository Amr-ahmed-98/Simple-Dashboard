'use client';

import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
        <div>Loading chart...</div>
      </div>
    );
  }

  const defaultData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgb(75, 192, 192)',
        borderRadius: 8,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        borderSkipped: false,
      },
    ],
  };

  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart',
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      className="w-full h-48 md:h-56 lg:h-64"
      style={{
        position: 'relative',
        maxWidth: '350px',
        margin: '0 auto',
      }}
    >
      <Bar 
        data={data || defaultData} 
        options={options || defaultOptions} 
      />
    </div>
  );
};

export default BarChart;