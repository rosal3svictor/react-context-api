import { createContext, useContext } from 'react';

/** React Context to manage Theme Config  */
export const ThemeContext = createContext<{
  /** It shows whether the current theme is dark or not */
  isDarkTheme: boolean;
  /** It allows to change the Theme from 'light' to 'dark' and vice versa */
  changeTheme: () => void;
}>({} as any);

/** Custom Hook to access the Theme Config Context */
export const useThemeContext = () => useContext(ThemeContext);
