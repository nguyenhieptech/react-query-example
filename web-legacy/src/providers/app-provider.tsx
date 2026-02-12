import { ReactQueryProvider } from "./react-query-provider";
import { RoutingProvider } from "./routing-provider";
import { ThemeProvider } from "./theme-provider";
import { ToasterProvider } from "./toaster-provider";

export function AppProvider() {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <RoutingProvider />
        <ToasterProvider />
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
