'use client';
import { useTheme } from '@/context/ThemeContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface UserData {
  users: Array<{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    company: { title: string };
  }>;
}

interface ProductData {
  products: Array<{
    id: number;
    title: string;
    price: number;
    stock: number;
    rating: number;
    thumbnail: string;
  }>;
}

interface CombinedItem {
  user: UserData['users'][number];
  product: ProductData['products'][number];
}

const ProductPerformance = () => {
  const { colors } = useTheme();

  const {
    data: userData,
    isLoading: loadingUser,
    error: errorUser,
  } = useQuery({
    queryKey: ['User'],
    queryFn: async () => {
      const response = await axios.get<UserData>(
        'https://dummyjson.com/users?limit=5'
      );
      return response.data;
    },
  });

  const {
    data: productData,
    isLoading: loadingProduct,
    error: errorProduct,
  } = useQuery({
    queryKey: ['Product'],
    queryFn: async () => {
      const response = await axios.get<ProductData>(
        'https://dummyjson.com/products?limit=5'
      );
      return response.data;
    },
  });

  const combinedData: CombinedItem[] = [];

  if (userData && productData) {
    const maxLength = Math.min(userData.users.length, productData.products.length);
    for (let i = 0; i < maxLength; i++) {
      combinedData.push({
        user: userData.users[i],
        product: productData.products[i],
      });
    }
  }

  const getPriority = (rating: number) => {
    if (rating > 3.5) return { text: 'High', color: 'red' };
    if (rating >= 2.5) return { text: 'Medium', color: 'yellow' };
    return { text: 'Low', color: 'green' };
  };

  const calculateBudget = (price: number, stock: number) => {
    return price * stock;
  };

  if (loadingUser || loadingProduct) return <div>Loading...</div>;
  if (errorUser || errorProduct) return <div>Error loading data</div>;

  return (
    <div className={`${colors.card} ${colors.cardHover} p-6`}>
      <h2 className={`${colors.textPrimary} text-2xl font-bold mb-6`}>
        Product Performance
      </h2>

      <div className='hidden md:block overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className={`hover ${colors.border} border-b`}>
              <th className={`py-4 ${colors.textPrimary}`}>Id</th>
              <th className='py-4'>Assigned To</th>
              <th className='py-4'>Product Name</th>
              <th className='py-4'>Priority</th>
              <th className='py-4'>Budget</th>
            </tr>
          </thead>
          <tbody>
            {combinedData.map((item) => {
              const priority = getPriority(item.product.rating);
              const budget = calculateBudget(
                item.product.price,
                item.product.stock
              );
              return (
                <tr key={item.user.id} className={`hover ${colors.border} border-b`}>
                  <td className={`py-4 ${colors.textPrimary}`}>
                    {item.user.id}
                  </td>
                  <td className='py-4'>
                    {item.user.firstName} {item.user.lastName}
                    <br />
                    <span className={`${colors.textSecondary} text-sm`}>
                      {item.user.company.title}
                    </span>
                  </td>
                  <td className='py-4'>
                    <div className='flex items-center gap-2'>
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className='w-8 h-8 rounded'
                      />
                      <span className={`font-medium ${colors.textPrimary}`}>
                        {item.product.title}
                      </span>
                    </div>
                  </td>
                  <td className='py-4'>
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium inline-flex items-center gap-2 ${
                        priority.color === 'red'
                          ? 'text-red-600 bg-red-100'
                          : priority.color === 'yellow'
                          ? 'text-yellow-600 bg-yellow-100'
                          : 'text-green-600 bg-green-100'
                      }`}
                    >
                      {priority.text}
                    </span>
                  </td>
                  <td className='py-4'>
                    <span className={`font-semibold ${colors.textPrimary}`}>
                      ${budget.toLocaleString()}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile view - visible From Small to Medium */}
      <div className='md:hidden space-y-4'>
        {combinedData.map((item) => {
          const priority = getPriority(item.product.rating);
          const budget = calculateBudget(
            item.product.price,
            item.product.stock
          );
          return (
            <div
              key={item.user.id}
              className={`p-4 rounded-lg shadow-sm ${colors.border} border ${colors.cardHover}`}
            >
              <div className='flex justify-between items-center mb-2'>
                <span className={`font-medium ${colors.textPrimary}`}>ID: {item.user.id}</span>
                <span
                  className={`px-3 py-1 text-${priority.color}-600 font-medium bg-${priority.color}-100 rounded-full text-xs`}
                >
                  {priority.text}
                </span>
              </div>

              <div className='mb-2'>
                <span className={`${colors.textSecondary} text-sm`}>Assigned To:</span>
                <div className={`font-medium ${colors.textPrimary}`}>
                  {item.user.firstName} {item.user.lastName}
                </div>
                <div className={`${colors.textSecondary} text-sm`}>
                  {item.user.company.title}
                </div>
              </div>

              <div className='mb-2'>
                <span className={`${colors.textSecondary} text-sm`}>Product:</span>
                <div className={`font-medium ${colors.textPrimary}`}>
                  {item.product.title}
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <span className={`${colors.textSecondary} text-sm`}>Budget:</span>
                <span className={`font-medium ${colors.textPrimary}`}>
                  ${budget.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPerformance;
