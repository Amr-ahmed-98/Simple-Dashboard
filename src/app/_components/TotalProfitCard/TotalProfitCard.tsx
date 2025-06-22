'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  TooltipItem,
} from 'chart.js';

// Register Chart.js components once
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const TotalProfitCard = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until component is mounted on client
  if (!isMounted) {
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

  const data = {
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // Disable animations to prevent cp1x errors
    animation: { duration: 0 },
    // Alternative: Use simple animation config
    // animation: {
    //   duration: 0,
    // },
    interaction: {
      intersect: false,
    },
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

  return (
    <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center'>
      <div className='text-2xl font-semibold text-gray-800 dark:text-white'>
        $86.4k
      </div>
      <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
        Total Profit
      </div>
      <div className='h-24'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalProfitCard;
