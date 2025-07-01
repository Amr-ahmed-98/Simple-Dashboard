const deposits = [
  {
    img: '/images/mastercard.png',
    alt: 'MasterCard',
    name: 'MasterCard',
    desc: 'Wallet Deposit',
    amount: '+$4,650',
  },
  {
    img: '/images/visa.png',
    alt: 'Visa',
    name: 'Visa',
    desc: 'Wallet Deposit',
    amount: '+$92,705',
  },
  {
    img: '/images/stripe.png',
    alt: 'Stripe',
    name: 'Stripe',
    desc: 'IOS Application',
    amount: '+$957',
  },
  {
    img: '/images/googlepay.png',
    alt: 'Google Pay',
    name: 'Google Pay',
    desc: 'Wallet Deposit',
    amount: '+$6,837',
  },
  {
    img: '/images/applepay.png',
    alt: 'Apple Pay',
    name: 'Apple Pay',
    desc: 'Wallet Deposit',
    amount: '+$446',
  },
];

import { useTheme } from '@/context/ThemeContext';

const DepositCard = () => {
  const { colors } = useTheme();
  return (
    <div className='w-full'>
      <div className={`${colors.card} shadow-xl w-full my-5 p-4 sm:p-6 md:p-8`}>
        <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${colors.textPrimary}`}>
          Deposit
        </h3>
        <div className='space-y-4'>
          {deposits.map((d) => (
            <div
              key={d.name}
              className={`group flex items-center justify-between ${colors.card} hover:${colors.cardHover} transition rounded-lg px-3 py-2 gap-2 shadow-sm ${colors.border}`}
            >
              <div className='flex items-center gap-3 min-w-[100px]'>
                <img
                  src={d.img}
                  alt={d.alt}
                  className='w-[30px] h-[30px] object-contain rounded'
                />
                <div>
                  <p className={`font-semibold ${colors.textPrimary} group-hover:${colors.textSecondary} text-sm sm:text-base m-0 leading-tight`}>
                    {d.name}
                  </p>
                  <span className={`text-xs ${colors.textSecondary}`}>
                    {d.desc}
                  </span>
                </div>
              </div>
              <div>
                <span className='font-bold text-green-500 text-base sm:text-lg'>
                  {d.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
