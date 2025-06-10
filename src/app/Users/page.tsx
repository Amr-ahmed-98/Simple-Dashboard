'use client';
import { SearchFilterProvider } from '../../context/SearchAndFilterContext';
import FilterUser from '../_components/FilterUser/FilterUser';
import SearchUsers from '../_components/SearchUsers/SearchUsers';
import UsersTable from '../_components/UsersTable/UsersTable';

const Page = () => {
  return (
    <SearchFilterProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-950 py-2 sm:py-4 md:py-8 px-2 sm:px-4 md:px-6'>
        <div className='flex flex-col gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto'>
          <FilterUser />
          <SearchUsers />
          <UsersTable />
        </div>
      </div>
    </SearchFilterProvider>
  );
};

export default Page;
