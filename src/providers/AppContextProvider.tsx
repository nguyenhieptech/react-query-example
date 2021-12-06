import { useState, createContext } from 'react';
import { ChildrenProps } from './types';

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37023
// romenkova commented on Dec 26, 2020

// Create Context Object
export const AppContext = createContext(null) as React.Context<any>;

// Create a provider for components to consume and subscribe to changes
export const AppContextProvider = ({ children }: ChildrenProps) => {
  const [flashMessage, setFlashMessage] = useState('');
  const contextValue = { flashMessage, setFlashMessage };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
