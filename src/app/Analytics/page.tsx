'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { ChartData, ChartOptions } from 'chart.js/auto';

// Dynamic imports with SSR disabled
const BarChart = dynamic(() => import('../_components/BarChart/BarChart'), {
  ssr: false,
  loading: () => (
    <div className='w-full h-64 flex items-center justify-center bg-gray-50 rounded'>
      <div className='text-gray-500'>Loading chart...</div>
    </div>
  ),
});

const TotalProfitCard = dynamic(
  () => import('../_components/TotalProfitCard/TotalProfitCard'),
  {
    ssr: false,
    loading: () => (
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
    ),
  }
);

// Import other components normally
import CongratulationsCard from '../_components/CongratulationsCard/CongratulationsCard';
import SalesByCountry from '../_components/SalesByCountry/SalesByCountry';
import DepositCard from '../_components/DepositCard/DepositCard';
import WithdrawCard from '../_components/WithdrawCard/WithdrawCard';

const Page = () => {
  const [chartData] = useState<ChartData<'bar'>>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12000, 19000, 17000, 28000, 24000, 35000],
        backgroundColor: 'rgb(53, 162, 235)',
        borderRadius: 8,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        borderSkipped: false,
      },
    ],
  });

  // Chart options with all animations disabled
  const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    animation: {
      duration: 0,
    },
    transitions: {
      active: {
        animation: { duration: 0 },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
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
    <div className='p-4 sm:p-6 md:p-8'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center'>
        All Analytics Of The Company
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
        <CongratulationsCard />
        <div className='card bg-base-100 shadow-xl w-full mx-auto flex flex-col items-center justify-center'>
          <div className='card-body w-full flex flex-col items-center justify-center'>
            <BarChart data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className='bg-gray-100 dark:bg-gray-900 flex items-center justify-center rounded-xl'>
          <TotalProfitCard />
        </div>
        <SalesByCountry />
        <DepositCard />
        <WithdrawCard />
      </div>
    </div>
  );
};

export default Page;
