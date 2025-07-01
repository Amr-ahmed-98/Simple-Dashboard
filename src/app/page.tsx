import AccountBalanceCard from './_components/AccountBalanceCard/AccountBalanceCard';
import NewSalesCard from './_components/NewSalesCard/NewSalesCard';
import TotalClientCard from './_components/TotalClientCard/TotalClientCard';
import RecentTransactions from './_components/RecentTransactions/RecentTransactions';
import ProductPerformance from './_components/ProductPerformance/ProductPerformance';


export default function Home() {
  return (
    <main className='container mx-auto px-4 py-8 max-w-7xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        <TotalClientCard />
        <AccountBalanceCard />
        <NewSalesCard />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <RecentTransactions />
        <ProductPerformance />
      </div>
      <div>  
      </div>
    </main>
  );
}
