'use client';
import { useTheme } from '@/context/ThemeContext';

const RecentTransactions = () => {
  const { colors } = useTheme();

  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'success':
        return {
          text: 'text-green-600',
          bg: 'bg-green-100',
          dot: 'bg-green-500',
        };
      case 'failed':
        return {
          text: 'text-red-600',
          bg: 'bg-red-100',
          dot: 'bg-red-500',
        };
      default:
        return {
          text: colors.textSecondary,
          bg: colors.backgroundSecondary,
          dot: colors.border,
        };
    }
  };

  return (
    <div className={`${colors.card} ${colors.cardHover} p-6`}>
      <h2 className={`${colors.textPrimary} text-2xl font-bold mb-6`}>Recent Transactions</h2>
      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className={`${colors.border} border-b`}>
              <th className='py-4'>Date</th>
              <th className='py-4'>Amount</th>
              <th className='py-4'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`hover ${colors.border} border-b`}>
              <td className={`py-4 ${colors.textPrimary}`}>
                2024-01-01
              </td>
              <td className={`py-4 ${colors.textPrimary} font-semibold`}>
                $1,000
              </td>
              <td className='py-4'>
                <span className={`px-3 py-1 ${colors.textSecondary} font-medium ${colors.backgroundSecondary} rounded-full text-sm inline-flex items-center gap-2`}>
                  <span className={`w-2 h-2 ${colors.border} rounded-full`} />
                  Pending
                </span>
              </td>
            </tr>
            <tr className={`hover ${colors.border} border-b`}>
              <td className={`py-4 ${colors.textPrimary}`}>
                2024-01-02
              </td>
              <td className={`py-4 ${colors.textPrimary} font-semibold`}>
                $2,000
              </td>
              <td className='py-4'>
                <span className={`px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full text-sm inline-flex items-center gap-2`}>
                  <span className='w-2 h-2 bg-green-500 rounded-full' />
                  Success
                </span>
              </td>
            </tr>
            <tr className={`hover ${colors.border} border-b`}>
              <td className={`py-4 ${colors.textPrimary}`}>
                2024-01-03
              </td>
              <td className={`py-4 ${colors.textPrimary} font-semibold`}>
                $3,000
              </td>
              <td className='py-4'>
                <span className={`px-3 py-1 text-red-600 font-medium bg-red-100 rounded-full text-sm inline-flex items-center gap-2`}>
                  <span className='w-2 h-2 bg-red-500 rounded-full' />
                  Failed
                </span>
              </td>
            </tr>
            <tr className={`hover ${colors.border} border-b`}>
              <td className={`py-4 ${colors.textPrimary}`}>
                2024-01-04
              </td>
              <td className={`py-4 ${colors.textPrimary} font-semibold`}>
                $4,000
              </td>
              <td className='py-4'>
                <span className={`px-3 py-1 text-green-600 font-medium bg-green-100 rounded-full text-sm inline-flex items-center gap-2`}>
                  <span className='w-2 h-2 bg-green-500 rounded-full' />
                  Success
                </span>
              </td>
            </tr>
            <tr className={`hover ${colors.border} border-b`}>
              <td className={`py-4 ${colors.textPrimary}`}>
                2024-01-05
              </td>
              <td className={`py-4 ${colors.textPrimary} font-semibold`}>
                $5,000
              </td>
              <td className='py-4'>
                <span className={`px-3 py-1 ${colors.textSecondary} font-medium ${colors.backgroundSecondary} rounded-full text-sm inline-flex items-center gap-2`}>
                  <span className={`w-2 h-2 ${colors.border} rounded-full`} />
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
