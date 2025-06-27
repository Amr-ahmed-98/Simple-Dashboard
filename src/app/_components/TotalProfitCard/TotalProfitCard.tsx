'use client';
import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions, TooltipItem } from 'chart.js/auto';

const TotalProfitCard = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Register ChartJS components only on client side
    ChartJS.register(
      LineElement,
      CategoryScale,
      LinearScale,
      PointElement,
      Tooltip
    );
    setIsInitialized(true);

    return () => {
      ChartJS.unregister(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Tooltip
      );
    };
  }, []);

  // Chart data and options
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

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 }, // Disable all animations
    plugins: {
      legend: { display: false },
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
      x: { display: false },
      y: { display: false },
    },
  };

  if (!isInitialized) {
    return (
      <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center'>
        <div className='text-2xl font-semibold text-gray-800 dark:text-white'>
          $86.4k
        </div>
        <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
          Total Profit
        </div>
        <div className='h-24 flex items-center justify-center bg-gray-50 rounded'>
          <div className='text-gray-500 text-sm'>Loading chart...</div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center'>
      <div className='text-2xl font-semibold text-gray-800 dark:text-white'>
        $86.4k
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
        Total Profit
      </div>
      <div className='h-24'>
        <Line data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default TotalProfitCard;
