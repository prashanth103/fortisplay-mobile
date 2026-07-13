import { ThemeContext } from '@/context/ThemeContext';
import { DARK_COLORS, LIGHT_COLORS } from '@/theme/colors';
import { useContext } from 'react';

export function useThemeColors() {
  const { themeName } = useContext(ThemeContext);

  switch (themeName) {
    case 'dark':
      return DARK_COLORS;
    // case 'blue':
    //   return BLUE_COLORS;
    // case 'red':
    //   return RED_COLORS;
    case 'light':
    default:
      return LIGHT_COLORS;
  }
}
