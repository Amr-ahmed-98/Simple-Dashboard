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

const DepositCard = () => {
  return (
    <div className='w-full'>
      <div className='card bg-base-100 shadow-xl w-full my-5 p-4 sm:p-6 md:p-8'>
        <h3 className='text-xl sm:text-2xl font-bold mb-4'>Deposit</h3>
        <div className='space-y-4'>
          {deposits.map((d) => (
            <div
              key={d.name}
              className='group flex items-center justify-between bg-base-100 dark:bg-gray-800  hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-lg px-3 py-2 gap-2 shadow-sm border border-gray-100 dark:border-gray-700'
            >
              <div className='flex items-center gap-3 min-w-[100px]'>
                <img
                  src={d.img}
                  alt={d.alt}
                  className='w-[30px] h-[30px] object-contain rounded'
                />
                <div>
                  <p className='font-semibold text-white group-hover:text-black dark:text-gray-100 dark:group-hover:text-white text-sm sm:text-base m-0 leading-tight'>
                    {d.name}
                  </p>
                  <span className='text-xs text-gray-500 dark:text-gray-400'>
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
