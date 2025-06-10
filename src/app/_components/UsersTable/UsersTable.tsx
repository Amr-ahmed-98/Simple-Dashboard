'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IoShieldCheckmark } from 'react-icons/io5';
import { FaFeatherAlt, FaEdit, FaTools, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useMemo } from 'react';
import { useSearchFilter } from '../../../context/SearchAndFilterContext';

const ROLES = ['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber'];
const PLANS = ['Basic', 'Company', 'Enterprise', 'Team', 'Pro'];
const STATUSES = [
  { label: 'Active', color: 'green' },
  { label: 'Pending', color: 'yellow' },
  { label: 'Inactive', color: 'red' },
];

const ROLE_ICONS = {
  Admin: <IoShieldCheckmark className='text-blue-500 inline mr-1' />,
  Author: <FaFeatherAlt className='text-purple-500 inline mr-1' />,
  Editor: <FaEdit className='text-green-500 inline mr-1' />,
  Maintainer: <FaTools className='text-yellow-500 inline mr-1' />,
  Subscriber: <FaUser className='text-gray-500 inline mr-1' />,
};

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserData {
  users: User[];
}

const UsersTable = () => {
  const { filters } = useSearchFilter();
  const {
    data: userData,
    isLoading: loadingUser,
    error: errorUser,
  } = useQuery({
    queryKey: ['Users'],
    queryFn: async () => {
      const response = await axios.get<UserData>('https://dummyjson.com/users');
      return response.data.users;
    },
  });

  const [page, setPage] = useState(1);
  const USERS_PER_PAGE = 10;

  // Filter users based on search and filter criteria
  const filteredUsers = useMemo(() => {
    if (!userData) return [];

    return userData.filter((user, idx) => {
      // Add role, plan, and status based on index
      const role = ROLES[idx % ROLES.length];
      const plan = PLANS[idx % PLANS.length];
      const status = STATUSES[idx % STATUSES.length];

      // Search filter
      const searchMatch =
        filters.searchTerm === '' ||
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.searchTerm.toLowerCase());

      // Role filter
      const roleMatch = filters.role === '' || role === filters.role;

      // Plan filter
      const planMatch = filters.plan === '' || plan === filters.plan;

      // Status filter
      const statusMatch =
        filters.status === '' || status.label === filters.status;

      return searchMatch && roleMatch && planMatch && statusMatch;
    });
  }, [userData, filters]);

  // Reset page when filters change
  useMemo(() => {
    setPage(1);
  }, [filters]);

  if (loadingUser) {
    return (
      <div className='flex justify-center items-center py-10'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#35A2EB]'></div>
      </div>
    );
  }

  if (errorUser) {
    return (
      <div className='flex justify-center items-center py-10  text-red-500 text-sm sm:text-base'>
        Error loading users. (Check Internet Connection)
      </div>
    );
  }

  // Pagination logic for filtered users
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);
  const startIdx = (page - 1) * USERS_PER_PAGE;
  const endIdx = startIdx + USERS_PER_PAGE;
  const usersToShow = filteredUsers.slice(startIdx, endIdx);

  return (
    <div className='w-full'>
      {/* Results summary */}
      <div className='mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-1'>
        Showing {usersToShow.length} of {totalUsers} users
        {totalUsers !== (userData?.length || 0) && (
          <span className='block sm:inline sm:ml-2 text-primary-600 dark:text-primary-400 mt-1 sm:mt-0'>
            (filtered from {userData?.length || 0} total)
          </span>
        )}
      </div>

      {/* Mobile Card View */}
      <div className='block sm:hidden space-y-3'>
        {usersToShow.length === 0 ? (
          <div className='bg-white dark:bg-gray-900 rounded-xl p-6 text-center text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800'>
            No users found matching your criteria.
          </div>
        ) : (
          usersToShow.map((user) => {
            const originalIdx = userData?.findIndex((u) => u.id === user.id) || 0;
            const role = ROLES[originalIdx % ROLES.length];
            const plan = PLANS[originalIdx % PLANS.length];
            const status = STATUSES[originalIdx % STATUSES.length];

            return (
              <div
                key={user.id}
                className='bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-800'
              >
                <div className='flex items-start gap-3 mb-3'>
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                      user.firstName + ' ' + user.lastName
                    )}`}
                    alt={user.firstName + ' ' + user.lastName}
                    className='w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0'
                  />
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-medium text-gray-900 dark:text-gray-100 text-sm'>
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400 truncate'>
                      {user.email}
                    </p>
                  </div>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full bg-${status.color}-100 text-${status.color}-800 dark:bg-${status.color}-900 dark:text-${status.color}-200 flex-shrink-0`}
                  >
                    {status.label}
                  </span>
                </div>
                <div className='grid grid-cols-2 gap-2 text-xs'>
                  <div>
                    <span className='text-gray-500 dark:text-gray-400 block mb-1'>Role</span>
                    <div className='flex items-center text-gray-900 dark:text-gray-100'>
                      {ROLE_ICONS[role as keyof typeof ROLE_ICONS]}
                      {role}
                    </div>
                  </div>
                  <div>
                    <span className='text-gray-500 dark:text-gray-400 block mb-1'>Plan</span>
                    <span className='text-gray-900 dark:text-gray-100'>{plan}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Desktop Table View */}
      <div className='hidden sm:block w-full overflow-x-auto rounded-xl'>
        <table className='min-w-full w-full bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800'>
          <thead>
            <tr>
              <th className='px-4 lg:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 first:rounded-tl-xl'>
                Name
              </th>
              <th className='px-4 lg:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 hidden md:table-cell'>
                Email
              </th>
              <th className='px-4 lg:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider bg-gray-50 dark:bg-gray-800'>
                Role
              </th>
              <th className='px-4 lg:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 hidden lg:table-cell'>
                Plan
              </th>
              <th className='px-4 lg:px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider bg-gray-50 dark:bg-gray-800 last:rounded-tr-xl'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {usersToShow.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className='px-4 lg:px-6 py-8 text-center text-gray-500 dark:text-gray-400'
                >
                  No users found matching your criteria.
                </td>
              </tr>
            ) : (
              usersToShow.map((user) => {
                const originalIdx = userData?.findIndex((u) => u.id === user.id) || 0;
                const role = ROLES[originalIdx % ROLES.length];
                const plan = PLANS[originalIdx % PLANS.length];
                const status = STATUSES[originalIdx % STATUSES.length];

                return (
                  <tr
                    key={user.id}
                    className='even:bg-gray-50 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors'
                  >
                    <td className='px-4 lg:px-6 py-4 text-sm text-gray-900 dark:text-gray-100'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                            user.firstName + ' ' + user.lastName
                          )}`}
                          alt={user.firstName + ' ' + user.lastName}
                          className='w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex-shrink-0'
                        />
                        <div className='min-w-0'>
                          <div className='font-medium'>
                            {user.firstName} {user.lastName}
                          </div>
                          <div className='text-xs text-gray-500 dark:text-gray-400 md:hidden truncate'>
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 lg:px-6 py-4 text-sm text-gray-900 dark:text-gray-100 hidden md:table-cell'>
                      <div className='truncate max-w-48 lg:max-w-none'>
                        {user.email}
                      </div>
                    </td>
                    <td className='px-4 lg:px-6 py-4 text-sm text-gray-900 dark:text-gray-100'>
                      <div className='flex items-center'>
                        {ROLE_ICONS[role as keyof typeof ROLE_ICONS]}
                        <span className='hidden sm:inline'>{role}</span>
                      </div>
                    </td>
                    <td className='px-4 lg:px-6 py-4 text-sm text-gray-900 dark:text-gray-100 hidden lg:table-cell'>
                      {plan}
                    </td>
                    <td className='px-4 lg:px-6 py-4 text-sm'>
                      <span
                        className={`inline-block px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-${status.color}-100 text-${status.color}-800 dark:bg-${status.color}-900 dark:text-${status.color}-200`}
                      >
                        <span className='hidden sm:inline'>{status.label}</span>
                        <span className='sm:hidden'>
                          {status.label.charAt(0)}
                        </span>
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Enhanced Pagination Controls */}
      {totalPages > 1 && (
        <div className='flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 sm:mt-6'>
          <div className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 order-2 sm:order-1'>
            Page {page} of {totalPages}
          </div>
          <div className='flex items-center gap-1 sm:gap-2 order-1 sm:order-2'>
            <button
              className='flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm'
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <FaChevronLeft className='text-xs' />
              <span className='hidden xs:inline'>Prev</span>
            </button>
            
            <div className='flex items-center gap-1'>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      page === pageNum
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              className='flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-xs sm:text-sm'
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              <span className='hidden xs:inline'>Next</span>
              <FaChevronRight className='text-xs' />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTable;