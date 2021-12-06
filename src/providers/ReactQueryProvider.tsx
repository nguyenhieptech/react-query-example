import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChildrenProps } from './types';

export function ReactQueryProvider({ children }: ChildrenProps) {
  // https://react-query.tanstack.com/reference/QueryClient
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
