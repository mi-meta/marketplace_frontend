import React, { createContext, useState } from 'react';
// import { initialState, StateProps } from '../state'

interface IThemeContext {
  theme: string;
  setTheme?: (prev: string) => void;
}
const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  // setTheme: Dispatch
});

const CustomThemeProvider = ({ children }: { children: React.ReactNode; value?: any }) => {
  const [theme, setTheme] = useState<string>('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { CustomThemeProvider, ThemeContext };
