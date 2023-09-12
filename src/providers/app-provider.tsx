import { RoutingProvider } from './routing-provider';
import { ReactQueryProvider } from './react-query-provider';
import { ToasterProvider } from './toaster-provider';

export function AppProvider() {
  return (
    <ReactQueryProvider>
      <RoutingProvider />
      <ToasterProvider />
    </ReactQueryProvider>
  );
}
