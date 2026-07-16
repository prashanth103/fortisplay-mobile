import { useWindowDimensions } from 'react-native';

import { BREAKPOINTS } from '@/theme/breakpoints';

export function useDevice() {

  const { width, height } = useWindowDimensions();

  const isTablet = width >= BREAKPOINTS.tablet;

  return {
    width,
    height,
    isTablet
  };
}