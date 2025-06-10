const RecentTransactions = () => {
  return (
    <div className='card bg-base-100 shadow-xl p-6 '>
      <h2 className='text-2xl font-bold mb-6'>Recent Transactions</h2>
      <div className='overflow-x-auto '>
        <table className='table table-zebra w-full'>
          <thead>
            <tr className='border-b'>
              <th className='py-4'>Date</th>
              <th className='py-4'>Amount</th>
              <th className='py-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='hover border-b'>
              <td className='py-4'>2024-01-01</td>
              <td className='py-4 font-semibold'>$1,000</td>
              <td className='py-4'>
                <span className='px-3 py-1 text-gray-600 font-medium bg-gray-100 rounded-full text-sm inline-flex items-center gap-2'>
                  <span className='w-2 h-2 bg-gray-500 rounded-full'></span>
                  Pending
                </span>
              </td>
            </tr>
            <tr className='hover border-b'>
              <td className='py-4'>2024-01-02</td>
              <td className='py-4 font-semibold'>$2,000</td>
              <td className='py-4'>
                <span className='px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full text-sm inline-flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  Success
                </span>
              </td>
            </tr>
            <tr className='hover border-b'>
              <td className='py-4'>2024-01-03</td>
              <td className='py-4 font-semibold'>$3,000</td>
              <td className='py-4'>
                <span className='px-3 py-1 text-red-600 font-medium bg-red-100 rounded-full text-sm inline-flex items-center gap-2'>
                  <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                  Failed
                </span>
              </td>
            </tr>
            <tr className='hover border-b'>
              <td className='py-4'>2024-01-04</td>
              <td className='py-4 font-semibold'>$4,000</td>
              <td className='py-4'>
                <span className='px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full text-sm inline-flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  Success
                </span>
              </td>
            </tr>
            <tr className='hover border-b'>
              <td className='py-4'>2024-01-05</td>
              <td className='py-4 font-semibold'>$5,000</td>
              <td className='py-4'>
                <span className='px-3 py-1 text-gray-600 font-medium bg-gray-100 rounded-full text-sm inline-flex items-center gap-2'>
                  <span className='w-2 h-2 bg-gray-500 rounded-full'></span>
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
