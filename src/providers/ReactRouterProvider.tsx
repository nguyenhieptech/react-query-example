import { BrowserRouter as Router } from 'react-router-dom';
import { ChildrenProps } from './types';

export function ReactRouterProvider({ children }: ChildrenProps) {
  return <Router>{children}</Router>;
}
