import { BREAKPOINTS } from '@/theme';
import { useWindowDimensions } from 'react-native';

export function useDevice() {

  const { width, height } = useWindowDimensions();

  const isTablet = width >= BREAKPOINTS.tablet;

  return {
    width,
    height,
    isTablet
  };
}