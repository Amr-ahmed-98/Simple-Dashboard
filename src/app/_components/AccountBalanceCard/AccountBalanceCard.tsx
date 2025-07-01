'use client';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeContext';

const AccountBalanceCard = () => {
  const [isClient, setIsClient] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`card ${colors.card} shadow-xl max-w-sm w-full`}>
      <figure className='px-4 pt-4'>
        <img
          src='/images/AccountBalance.png'
          alt='Account Balance'
          className='rounded-xl w-full h-40 object-cover'
        />
      </figure>
      <div className='card-body p-4'>
        <h2 className={`card-title text-xl ${colors.textPrimary}`}>
          Account Balance
        </h2>
        <div className='flex items-center gap-2'>
          <p className={`text-3xl font-bold ${colors.textPrimary}`}>
            $
            {isClient ? (
              <CountUp end={12345.67} duration={2} decimals={2} />
            ) : (
              '0.00'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceCard;
