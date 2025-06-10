'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const QueryWraped = ({children}: {children: React.ReactNode}) => {
    const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryWraped