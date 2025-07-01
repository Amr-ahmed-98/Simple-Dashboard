'use client';
import { IoPersonSharp, IoLanguage } from 'react-icons/io5';
import { FaCheck, FaRegStar, FaPhone } from 'react-icons/fa6';
import { CiFlag1 } from 'react-icons/ci';
import { FaDiscord } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { useTheme } from '../../../context/ThemeContext';

const AboutProfile = () => {
  const { colors } = useTheme();
  return (
    <div
      className={`max-w-xl ${colors.card} shadow-2xl min-h-32 rounded-2xl p-6 text-left`}
    >
      <h2 className={`${colors.textTertiary} font-bold mb-4`}>About</h2>
      <div className='space-y-4'>
        <div className='flex flex-wrap items-center gap-4'>
          <IoPersonSharp className={`${colors.textPrimary} text-2xl`} />
          <p className={`${colors.textPrimary} font-medium`}>
            Full Name: <span className='font-normal'>Amr Ahmed Ibrahim</span>
          </p>
          <FaCheck className='text-green-500 text-xl' />
          <span className='text-green-600 font-medium'>
            Status: <span className='font-normal'>Active</span>
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <IoLanguage className='text-blue-500 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Language: <span className='font-normal'>English, Arabic</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <CiFlag1 className='text-green-500 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Country: <span className='font-normal'>Egypt</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <FaRegStar className='text-yellow-400 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Role <span className='font-normal'>Front End Developer</span>
          </p>
        </div>
      </div>
      <h2 className={`${colors.textTertiary} font-bold mt-8 mb-4`}>Contacts</h2>
      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <FaDiscord className='text-indigo-500 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Discord: <span className='font-normal'>DaAmr</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <FaPhone className='text-green-500 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Phone: <span className='font-normal'>+20 1156039815</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <IoMdMailOpen className='text-red-500 text-2xl' />
          <p className={`${colors.textPrimary} font-medium`}>
            Email: <span className='font-normal'>amrahmedwork@hotmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
