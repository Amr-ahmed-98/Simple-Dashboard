import { EG, SA, AE, JO, LB, SY } from 'country-flag-icons/react/3x2';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const countries = [
  {
    name: 'Egypt',
    Flag: EG,
    sales: 894000,
    revenue: 8.656,
    growth: 25.8,
    color: 'green',
  },
  {
    name: 'Saudi Arabia',
    Flag: SA,
    sales: 720000,
    revenue: 7.21,
    growth: 18.2,
    color: 'green',
  },
  {
    name: 'UAE',
    Flag: AE,
    sales: 650000,
    revenue: 6.5,
    growth: 12.5,
    color: 'green',
  },
  {
    name: 'Jordan',
    Flag: JO,
    sales: 410000,
    revenue: 4.1,
    growth: 7.8,
    color: 'yellow',
  },
  {
    name: 'Lebanon',
    Flag: LB,
    sales: 320000,
    revenue: 3.2,
    growth: 3.2,
    color: 'yellow',
  },
  {
    name: 'Syria',
    Flag: SY,
    sales: 150000,
    revenue: 1.5,
    growth: 1.1,
    color: 'red',
  },
];

const SalesByCountry = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='w-full'>
      <div className='card bg-base-100 shadow-xl w-full my-5 p-4 sm:p-6 md:p-8'>
        <h3 className='text-xl sm:text-2xl font-bold mb-4'>Sales by Country</h3>
        <div className='space-y-4'>
          {countries.map(({ name, Flag, sales, revenue, growth, color }) => (
            <div
              key={name}
              className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 border-b last:border-b-0 pb-4 last:pb-0'
            >
              <div className='flex items-center justify-center  sm:justify-start w-full sm:w-auto'>
                <Flag title={name} className='h-10 w-10 sm:h-12 sm:w-12' />
              </div>
              <div className='flex-0 flex flex-col items-center sm:items-start'>
                <div className='flex items-center text-lg font-semibold gap-1'>
                  $
                  {isClient ? (
                    <CountUp end={revenue} duration={2} decimals={2} />
                  ) : (
                    revenue.toFixed(2)
                  )}
                  K
                  <span
                    className={`text-${color}-500 flex items-center text-sm ml-2`}
                  >
                    {' '}
                    <IoIosArrowUp /> {growth}%{' '}
                  </span>
                </div>
                <div className='text-gray-500 text-sm'>{name}</div>
              </div>
              <div className='flex flex-col items-center sm:items-end min-w-[80px]'>
                <span className='font-bold'>
                  {(sales / 1000).toLocaleString()}k
                </span>
                <span className='font-light text-xs text-gray-500'>Sales</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesByCountry;
