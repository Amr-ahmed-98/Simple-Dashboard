'use client';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const NewSalesCard = () => {
  const [isClient, setIsClient] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`card ${colors.card} shadow-xl max-w-sm w-full`}>
      <figure className='px-4 pt-4'>
        <img
          src='/images/NewSales.svg'
          alt='New Sales'
          className='rounded-xl w-full h-40 object-cover'
        />
      </figure>
      <div className='card-body p-4'>
        <h2 className={`card-title text-xl ${colors.textPrimary}`}>
          New Sales
        </h2>
        <div className='flex items-center gap-2'>
          <p className={`text-3xl font-bold ${colors.textPrimary}`}>
            {isClient ? <CountUp end={600} duration={2} /> : '0'}
          </p>
          <p className='text-sm text-green-500'>+20%</p>
        </div>
      </div>
    </div>
  );
};

export default NewSalesCard;
