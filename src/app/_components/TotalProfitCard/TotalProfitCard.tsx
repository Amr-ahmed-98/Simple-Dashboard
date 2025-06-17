'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
  type TooltipItem
} from 'chart.js';

// Register components once
const registerChartJS = () => {
  ChartJS.register(
    LineController,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
  );
};

interface TotalProfitCardProps {
  profitAmount?: string;
}

const TotalProfitCard = ({ profitAmount = '$86.4k' }: TotalProfitCardProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    registerChartJS();
    setIsInitialized(true);
  }, []);

  const data: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Profit',
        data: [20, 35, 25, 40, 30, 50],
        borderColor: '#a78bfa',
        backgroundColor: '#a78bfa',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: '#a78bfa',
        pointHoverBackgroundColor: '#c084fc',
        fill: false,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: { 
        display: false 
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#a78bfa',
        cornerRadius: 8,
        padding: 10,
        callbacks: {
          title: () => '',
          label: (context: TooltipItem<'line'>) => `$${context.parsed.y}k`,
        },
      },
    },
    scales: {
      x: { 
        display: false,
        grid: {
          display: false,
        }
      },
      y: { 
        display: false,
        grid: {
          display: false,
        }
      },
    },
    animation: {
      duration: 0 // Disable initial animation to prevent potential errors
    }
  };

  if (!isInitialized) {
    return (
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center'>
        <div className='text-2xl font-semibold text-gray-800 dark:text-white'>
          {profitAmount}
        </div>
        <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
          Total Profit
        </div>
        <div className='h-24 flex items-center justify-center'>Loading chart...</div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center'>
      <div className='text-2xl font-semibold text-gray-800 dark:text-white'>
        {profitAmount}
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
        Total Profit
      </div>
      <div className='h-24'>
        <Line 
          data={data} 
          options={options} 
          fallbackContent={<div>Loading chart...</div>}
        />
      </div>
    </div>
  );
};

export default TotalProfitCard;