import { BREAKPOINTS } from './breakpoints';
import { COLORS } from './colors';
import { MOTION } from './motion';
import { POOL_COLORS } from './poolColors';
import { RADIUS } from './radius';
import { SHADOWS } from './shadows';
import { SPACING } from './spacing';
import { STATUS } from './status';
import { TYPOGRAPHY } from './typography';
import { WALLET } from './wallet';

export const THEME = {

  colors: COLORS,

  poolColors: POOL_COLORS,

  spacing: SPACING,

  radius: RADIUS,

  typography: TYPOGRAPHY,

  shadows: SHADOWS,

  motion: MOTION,

  breakpoints: BREAKPOINTS,

  status: STATUS,

  wallet: WALLET

} as const;