'use client';
import { FaLaptopCode, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';

const ImageProfile = () => {
  const { colors } = useTheme();
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div
        className={`relative ${colors.card} rounded-2xl shadow-xl overflow-hidden`}
      >
        {/* Hero gradient background */}
        <div className='h-32 md:h-40 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 relative'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
        </div>

        {/* Profile image - positioned to overlap sections */}
        <div className='absolute left-1/2 top-16 md:top-20 -translate-x-1/2'>
          <div className='relative'>
            <img
              src='/images/AvatarProfile.png'
              alt='Profile Avatar'
              className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg ${colors.background} object-cover`}
            />
            <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full' />
          </div>
        </div>

        {/* Content section */}
        <div className='pt-16 md:pt-18 pb-6 px-6'>
          {/* Info cards grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            <div
              className={`flex items-center justify-center md:justify-start gap-3 p-4 ${colors.backgroundSecondary} rounded-xl hover:${colors.backgroundTertiary} transition-colors duration-200`}
            >
              <div className='p-2 bg-blue-100 rounded-lg'>
                <FaLaptopCode className='w-5 h-5 text-blue-600' />
              </div>
              <div className='text-center md:text-left'>
                <p className={`text-sm ${colors.textTertiary} font-medium`}>
                  Role
                </p>
                <p className={`${colors.textSecondary} font-semibold`}>
                  Front End Developer
                </p>
              </div>
            </div>

            <div
              className={`flex items-center justify-center md:justify-start gap-3 p-4 ${colors.backgroundSecondary} rounded-xl hover:${colors.backgroundTertiary} transition-colors duration-200`}
            >
              <div className='p-2 bg-blue-100 rounded-lg'>
                <FaMapMarkerAlt className='w-5 h-5 text-blue-600' />
              </div>
              <div className='text-center md:text-left'>
                <p className={`text-sm ${colors.textTertiary} font-medium`}>
                  Location
                </p>
                <p className={`${colors.textSecondary} font-semibold`}>
                  Nasr City
                </p>
              </div>
            </div>

            <div
              className={`flex items-center justify-center md:justify-start gap-3 p-4 ${colors.backgroundSecondary} rounded-xl hover:${colors.backgroundTertiary} transition-colors duration-200`}
            >
              <div className='p-2 bg-blue-100 rounded-lg'>
                <FaRegCalendarAlt className='w-5 h-5 text-blue-600' />
              </div>
              <div className='text-center md:text-left'>
                <p className={`text-sm ${colors.textTertiary} font-medium`}>
                  Available
                </p>
                <p className={`${colors.textSecondary} font-semibold`}>
                  April 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageProfile;
