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
  type ChartData,
  type ChartOptions,
} from 'chart.js';

// Explicitly register all required components
const registerChartJS = () => {
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
};

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
  animation: {
    duration: 0 // Disable animations initially to prevent cp1x error
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    registerChartJS();
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return <div className="h-64 flex items-center justify-center">Loading chart...</div>;
  }

  return (
    <div className="w-full h-64 relative">
      <Bar 
        data={data}
        options={{
          ...defaultOptions,
          ...options,
          animation: options?.animation ? {
            ...defaultOptions.animation,
            ...options.animation
          } : defaultOptions.animation
        }}
      />
    </div>
  );
};

export default BarChart;