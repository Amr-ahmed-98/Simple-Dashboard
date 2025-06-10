'use client';
import { FaSearch } from 'react-icons/fa';
import { useSearchFilter } from '../../../context/SearchAndFilterContext';

const SearchUsers = () => {
  const { filters, updateSearchTerm } = useSearchFilter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchTerm(e.target.value);
  };

  return (
    <div className='bg-white dark:bg-gray-900 shadow-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 w-full mx-auto border border-gray-100 dark:border-gray-800'>
      <div className='flex items-center gap-2 mb-2 sm:mb-3 md:mb-4'>
        <FaSearch className='text-primary-500 text-base sm:text-lg' />
        <span className='font-semibold text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100'>
          Search Users
        </span>
      </div>
      <input
        type='text'
        placeholder='Search by name or email'
        value={filters.searchTerm}
        onChange={handleSearchChange}
        className='w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition shadow-sm text-sm sm:text-base'
      />
    </div>
  );
};

export default SearchUsers;