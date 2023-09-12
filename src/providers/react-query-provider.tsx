// https://tanstack.com/query/latest/docs/react/quick-start
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// https://tanstack.com/query/latest/docs/react/devtools#floating-mode
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
