import { FaTrophy } from 'react-icons/fa6';

const CongratulationsCard = () => {
  return (
    <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
      <div className='w-full h-48 md:h-56 lg:h-64 flex items-center justify-between gap-8'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='font-bold text-3xl text-gray-800'>
              Congratulations Amr ! 🎉
            </h2>
            <span className='text-gray-600'>Best seller of the month</span>
          </div>
          <div className='space-y-1'>
            <span className='text-2xl font-semibold text-gray-800'>$50.5K</span>
            <p className='text-gray-600'>
              <span className='text-green-500 font-medium'>30%</span> of target
              🚀
            </p>
          </div>
        </div>
        <div className='flex-shrink-0'>
          <FaTrophy className='text-yellow-500 text-6xl' />
        </div>
      </div>
    </div>
  );
};

export default CongratulationsCard;
