import { useState, useMemo } from 'react';
import { ThemeContext } from './context';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  /**
   * This a memoized value. By doing so, non-stable values are prevented from
   * being used as a value for Context.Provider.
   * */
  const value = useMemo(() => {
    const changeTheme = () => {
      setDarkTheme((prev) => !prev);
      document.body.style.backgroundColor = darkTheme ? 'white' : 'black';
    };

    return {
      isDarkTheme: darkTheme,
      changeTheme,
    };
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export * from './context';
