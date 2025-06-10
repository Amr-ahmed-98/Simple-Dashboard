'use client';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { useSearchFilter } from '../../../context/SearchAndFilterContext';

const FilterUser = () => {
  const { filters, updateRole, updatePlan, updateStatus, clearFilters } =
    useSearchFilter();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateRole(e.target.value);
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updatePlan(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(e.target.value);
  };

  // Check if any filters are active
  const hasActiveFilters =
    filters.role || filters.plan || filters.status || filters.searchTerm;

  return (
    <div className='bg-white dark:bg-gray-900 shadow-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-full mx-auto border border-gray-100 dark:border-gray-800'>
      <div className='flex flex-col xs:flex-row xs:items-center justify-between mb-2 sm:mb-3 md:mb-4 gap-2'>
        <div className='flex items-center gap-2'>
          <FaFilter className='text-primary-500 text-base sm:text-lg' />
          <span className='font-semibold text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100'>
            User Filters
          </span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className='flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors self-start xs:self-auto'
          >
            <FaTimes className='text-xs' />
            Clear All
          </button>
        )}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4'>
        <select
          name='role'
          id='role'
          value={filters.role}
          onChange={handleRoleChange}
          className='px-3 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition shadow-sm text-sm sm:text-base'
        >
          <option value=''>All Roles</option>
          <option value='Admin'>Admin</option>
          <option value='Author'>Author</option>
          <option value='Editor'>Editor</option>
          <option value='Maintainer'>Maintainer</option>
          <option value='Subscriber'>Subscriber</option>
        </select>
        <select
          name='plan'
          id='plan'
          value={filters.plan}
          onChange={handlePlanChange}
          className='px-3 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition shadow-sm text-sm sm:text-base'
        >
          <option value=''>All Plans</option>
          <option value='Basic'>Basic</option>
          <option value='Company'>Company</option>
          <option value='Enterprise'>Enterprise</option>
          <option value='Team'>Team</option>
          <option value='Pro'>Pro</option>
        </select>
        <select
          name='status'
          id='status'
          value={filters.status}
          onChange={handleStatusChange}
          className='px-3 py-2 sm:py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition shadow-sm text-sm sm:text-base sm:col-span-2 lg:col-span-1'
        >
          <option value=''>All Statuses</option>
          <option value='Active'>Active</option>
          <option value='Pending'>Pending</option>
          <option value='Inactive'>Inactive</option>
        </select>
      </div>
    </div>
  );
};

export default FilterUser;