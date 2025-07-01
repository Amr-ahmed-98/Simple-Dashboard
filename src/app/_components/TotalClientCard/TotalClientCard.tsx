'use client';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const TotalClientCard = () => {
  const [isClient, setIsClient] = useState(false);
  const currentYear = new Date().getFullYear();
  const { colors } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`card ${colors.card} shadow-xl max-w-sm w-full`}>
      <figure className='px-4 pt-4'>
        <img
          src='/images/TotalClient.png'
          alt='Total Client'
          className='rounded-xl w-full h-40 object-cover'
        />
      </figure>
      <div className='card-body p-4'>
        <h2 className={`card-title text-xl ${colors.textPrimary}`}>
          Total Clients
        </h2>
        <div className='flex items-center gap-2'>
          <p className={`text-3xl font-bold ${colors.textPrimary}`}>
            {isClient ? <CountUp end={13} duration={2} suffix='K' /> : '0K'}
          </p>
          <p className='text-sm text-green-500'>+15.5%</p>
        </div>
        <p className={`text-sm ${colors.textSecondary}`}>
          Year of {currentYear}
        </p>
      </div>
    </div>
  );
};

export default TotalClientCard;
