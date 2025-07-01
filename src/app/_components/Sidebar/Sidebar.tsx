import {
  IoHomeOutline,
  IoAnalyticsOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

const Sidebar = () => {
  const { colors } = useTheme();
  return (
    <aside
      className={`${colors.background} ${colors.textPrimary} w-16 md:w-64 min-h-screen transition-all duration-300`}
    >
      <div className='p-2 md:p-4'>
        <ul className='space-y-2'>
          <li>
            <Link
              href={'/'}
              className={`flex flex-col md:flex-row items-center md:items-center gap-0 md:gap-4 p-2 md:p-3 rounded-lg transition-colors justify-center md:justify-start hover:${colors.backgroundSecondary}`}
            >
              <IoHomeOutline
                className={`text-2xl ${colors.icon} ${colors.iconHover}`}
              />
              <span className='hidden md:inline text-xs md:text-base'>
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/Analytics'}
              className={`flex flex-col md:flex-row items-center md:items-center gap-0 md:gap-4 p-2 md:p-3 rounded-lg transition-colors justify-center md:justify-start hover:${colors.backgroundSecondary}`}
            >
              <IoAnalyticsOutline
                className={`text-2xl ${colors.icon} ${colors.iconHover}`}
              />
              <span className='hidden md:inline text-xs md:text-base'>
                Analytics
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/Users'}
              className={`flex flex-col md:flex-row items-center md:items-center gap-0 md:gap-4 p-2 md:p-3 rounded-lg transition-colors justify-center md:justify-start hover:${colors.backgroundSecondary}`}
            >
              <FaUserFriends
                className={`text-2xl ${colors.icon} ${colors.iconHover}`}
              />
              <span className='hidden md:inline text-xs md:text-base'>
                Users
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
