import { ThemeName } from '@/theme';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

interface ThemeContextProps {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeName: 'light', // Default
  setThemeName: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // const [themeName, setThemeName] = useState<ThemeName>(
  //   Appearance.getColorScheme() === 'dark' ? 'dark' : 'light'
  // );
  const [themeName, setThemeName] = useState<ThemeName>('dark');

  // Listen to system theme changes if we are currently using 'light' or 'dark'
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      // If the user hasn't forced a white-label theme, follow the system
      if (themeName === 'light' || themeName === 'dark') {
        setThemeName(colorScheme === 'dark' ? 'dark' : 'light');
      }
    });
    return () => subscription.remove();
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
