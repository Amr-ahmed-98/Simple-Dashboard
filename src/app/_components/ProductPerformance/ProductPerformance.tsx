'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';




interface CombinedItem {
  user: User;
  product: Product;
}

const ProductPerformance = () => {
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
      return response.data.users;
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
      return response.data.products;
    },
  });


  const combinedData: CombinedItem[] = [];

  if (userData && productData) {
    // Match users with products (assuming we want to pair them by index)
    const maxLength = Math.min(userData.length, productData.length);
    for (let i = 0; i < maxLength; i++) {
      combinedData.push({
        user: userData[i],
        product: productData[i],
      });
    }
  }

  // Function to determine priority based on ratings
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
    <div className='card bg-base-100 shadow-xl p-6'>
      <h2 className='text-2xl font-bold mb-6 '>Product Performance</h2>

      {/* Window view - Visble From Midium to Upper */}
      <div className='hidden md:block overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr className='border-b'>
              <th className='py-4'>Id</th>
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
                <tr key={item.user.id} className='hover border-b'>
                  <td className='py-4'>{item.user.id}</td>
                  <td className='py-4'>
                    {item.user.firstName} {item.user.lastName}
                    <br />
                    <span className='text-sm text-gray-500'>
                      {item.user.company.title}
                    </span>
                  </td>
                  <td className='py-4'>{item.product.title}</td>
                  <td className='py-4'>
                    <span
                      className={`px-3 py-1 text-${priority.color}-600 font-medium bg-${priority.color}-100 rounded-full text-sm`}
                    >
                      {priority.text}
                    </span>
                  </td>
                  <td className='py-4'>${budget.toLocaleString()}</td>
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
              className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-center mb-2'>
                <span className='font-medium'>ID: {item.user.id}</span>
                <span
                  className={`px-3 py-1 text-${priority.color}-600 font-medium bg-${priority.color}-100 rounded-full text-xs`}
                >
                  {priority.text}
                </span>
              </div>

              <div className='mb-2'>
                <span className='text-gray-500 text-sm'>Assigned To:</span>
                <div className='font-medium'>
                  {item.user.firstName} {item.user.lastName}
                </div>
                <div className='text-sm text-gray-500'>
                  {item.user.company.title}
                </div>
              </div>

              <div className='mb-2'>
                <span className='text-gray-500 text-sm'>Product:</span>
                <div className='font-medium'>{item.product.title}</div>
              </div>

              <div className='flex justify-between items-center'>
                <span className='text-gray-500 text-sm'>Budget:</span>
                <span className='font-medium'>${budget.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPerformance;
