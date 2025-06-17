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
  Filler,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Define TypeScript interfaces
interface BarChartProps {
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

// Default chart data
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

// Default chart options
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

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (typeof window === 'undefined' || !isReady) {
    return <div className="chart-loading">Loading chart...</div>;
  }

  return (
    <div className="chart-container" style={{
      position: 'relative',
      height: '400px',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <Bar
        data={data || defaultData}
        options={options || defaultOptions}
        fallbackContent={<div>Loading chart...</div>}
      />
    </div>
  );
};

export default BarChart;