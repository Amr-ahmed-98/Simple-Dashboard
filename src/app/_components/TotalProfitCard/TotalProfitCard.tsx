'use client';
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

// Register Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const TotalProfitCard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Placeholder labels
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
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#1f2937', // dark gray
        titleColor: '#ffffff',
        bodyColor: '#a78bfa',
        cornerRadius: 8,
        padding: 10,
        callbacks: {
          title: () => '', // hide label
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
    <div className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 w-64 text-center '>
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
