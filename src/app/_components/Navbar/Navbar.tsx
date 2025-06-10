'use client';

import { useState, useEffect, useRef } from 'react';
import {
  IoPerson,
  IoSunnyOutline,
  IoClose
} from 'react-icons/io5';
import { CiSettings } from 'react-icons/ci';
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsInfoCircle,
} from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Payment Successful',
      message: 'Your subscription has been renewed successfully.',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Storage Almost Full',
      message: 'You are using 89% of your storage space.',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out our new dashboard analytics tools.',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile information has been saved.',
      time: '1 day ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <BsCheckCircle className='text-green-400' />;
      case 'warning':
        return <BsExclamationCircle className='text-yellow-400' />;
      case 'info':
        return <BsInfoCircle className='text-blue-400' />;
      default:
        return <BsInfoCircle className='text-blue-400' />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  if (!isClient) {
    return (
      <div className='flex justify-between items-center p-4 bg-[#1A1C23] text-white'>
        <h1 className='text-2xl font-bold'>Simple Dashboard</h1>
      </div>
    );
  }

  return (
    <div className='relative'>
      <div className='flex justify-between items-center p-4 bg-[#1A1C23] text-white'>
        <h1 className='text-xl sm:text-2xl font-bold'>Simple Dashboard</h1>
        <div className='flex items-center gap-2 sm:gap-4'>
          <IoSunnyOutline className='text-xl cursor-pointer hover:text-yellow-400 transition-colors' />

          {/* Notification Button */}
          <div className='relative' ref={notificationRef}>
            <button
              className='btn btn-ghost btn-circle hover:bg-gray-700 transition-all duration-200'
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
                {unreadCount > 0 && (
                  <span className='badge badge-xs badge-primary indicator-item animate-pulse'>
                    {unreadCount}
                  </span>
                )}
              </div>
            </button>

            {/* Notification Panel */}
            {showNotifications && (
              <div className='absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 animate-in slide-in-from-top-2 duration-200'>
                {/* Header */}
                <div className='flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    Notifications
                  </h3>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className='p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
                  >
                    <IoClose className='text-gray-500 dark:text-gray-400' />
                  </button>
                </div>

                {/* Notifications List */}
                <div className='max-h-96 overflow-y-auto'>
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                          !notification.read
                            ? 'bg-blue-50 dark:bg-blue-900/20'
                            : ''
                        }`}
                      >
                        <div className='flex items-start gap-3'>
                          <div className='flex-shrink-0 mt-1'>
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center justify-between'>
                              <h4 className='text-sm font-medium text-gray-900 dark:text-white truncate'>
                                {notification.title}
                              </h4>
                              {!notification.read && (
                                <div className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-2'></div>
                              )}
                            </div>
                            <p className='text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2'>
                              {notification.message}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400 mt-2'>
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className='p-8 text-center'>
                      <div className='text-gray-400 dark:text-gray-500 mb-2'>
                        <svg
                          className='w-12 h-12 mx-auto'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1'
                            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                          ></path>
                        </svg>
                      </div>
                      <p className='text-gray-500 dark:text-gray-400'>
                        No notifications
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                {notifications.length > 0 && (
                  <div className='p-3 border-t border-gray-200 dark:border-gray-700'>
                    <button className='w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors'>
                      View All Notifications
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar hover:bg-gray-700'
            >
              <div className='w-8 sm:w-10 rounded-full'>
                <img
                  alt='Profile'
                  src='https://cdn-icons-png.flaticon.com/512/4322/4322991.png'
                  className='rounded-full'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg'
            >
              <li>
                <Link href={'/Profile'} className='justify-between '>
                  Profile
                  <span className='badge'>
                    <IoPerson />
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/Settings'} >
                  Settings
                  <span className='badge'>
                    <CiSettings className='text-xl' />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
