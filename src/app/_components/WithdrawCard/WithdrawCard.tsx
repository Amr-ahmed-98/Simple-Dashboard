const withdraws = [
  {
    img: '/images/applepay.png',
    alt: 'Apple Pay',
    name: 'Apple Pay',
    desc: 'Wallet Withdraw',
    amount: '-$1,200',
  },
  {
    img: '/images/googlepay.png',
    alt: 'Google Pay',
    name: 'Google Pay',
    desc: 'Wallet Withdraw',
    amount: '-$3,500',
  },
  {
    img: '/images/stripe.png',
    alt: 'Stripe',
    name: 'Stripe',
    desc: 'IOS Application',
    amount: '-$2,100',
  },
  {
    img: '/images/visa.png',
    alt: 'Visa',
    name: 'Visa',
    desc: 'Wallet Withdraw',
    amount: '-$7,800',
  },
  {
    img: '/images/mastercard.png',
    alt: 'MasterCard',
    name: 'MasterCard',
    desc: 'Wallet Withdraw',
    amount: '-$950',
  },
];

import { useTheme } from '@/context/ThemeContext';

const WithdrawCard = () => {
  const { colors } = useTheme();
  return (
    <div className='w-full'>
      <div className={`${colors.card} shadow-xl w-full my-5 p-4 sm:p-6 md:p-8`}>
        <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${colors.textPrimary}`}>
          Withdraw
        </h3>
        <div className='space-y-4'>
          {withdraws.map((w) => (
            <div
              key={w.name}
              className={`group flex items-center justify-between ${colors.card} hover:${colors.cardHover} transition rounded-lg px-3 py-2 gap-2 shadow-sm ${colors.border}`}
            >
              <div className='flex items-center gap-3 min-w-[100px]'>
                <img
                  src={w.img}
                  alt={w.alt}
                  className='w-[30px] h-[30px] object-contain rounded'
                />
                <div>
                  <p className={`font-semibold ${colors.textPrimary} group-hover:${colors.textSecondary} text-sm sm:text-base m-0 leading-tight`}>
                    {w.name}
                  </p>
                  <span className={`text-xs ${colors.textSecondary}`}>
                    {w.desc}
                  </span>
                </div>
              </div>
              <div>
                <span className='font-bold text-red-500 text-base sm:text-lg'>
                  {w.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithdrawCard;
