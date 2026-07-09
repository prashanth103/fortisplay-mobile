import { useColorScheme } from 'react-native';
import { DARK_COLORS, LIGHT_COLORS } from '@/theme/colors';

export function useThemeColors() {
  const scheme = useColorScheme();
  return scheme === 'light' ? LIGHT_COLORS : DARK_COLORS;
}
