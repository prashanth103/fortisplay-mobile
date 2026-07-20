export const PALETTE = {
  // Grays / Neutrals
  black: '#000000',
  gray900: '#090909',
  gray800: '#121212',
  gray700: '#181818',
  gray600: '#1F1F1F',
  gray500: '#2A2A2A',
  gray400: '#4D4D4D',
  gray300: '#8E8E8E',
  gray200: '#D9D9D9',
  gray100: '#F5F5F5',
  gray50: '#FAFAFA',
  white: '#FFFFFF',

  // Primary (Gold)
  gold300: '#F6D877',
  gold400: '#E3BA4B',
  gold500: '#C89512',
  gold800: '#3B3323', // Dark gold background
  gold100: '#FCF3D6', // Light gold background

  // Semantic (Green)
  green400: '#59C97D',
  green600: '#1E8A45',
  green800: '#1A3322', // Dark green background
  green100: '#E7F5EA', // Light green background

  // Semantic (Red)
  red400: '#F04A3A',
  red600: '#D6392B',
  red800: '#351B17', // Dark red background
  red100: '#FDECEA', // Light red background

  // Semantic (Blue)
  blue400: '#6BB9FF',
  blue600: '#3563D4',

  // Semantic (Orange)
  orange400: '#F28B34',
};

export const DARK_COLORS = {
  // Brand
  primary: PALETTE.gold400,
  primaryMuted: 'rgba(227, 186, 75, 0.15)', // transparent gold400
  primaryContrast: PALETTE.black,

  // Backgrounds
  bg: PALETTE.gray900,
  bgSecondary: PALETTE.gray800,
  bgSurface: PALETTE.gray700,
  bgElevated: PALETTE.gray600,
  bgMuted: PALETTE.gray600,

  // Text & Icons
  text: PALETTE.gray100,
  textMuted: PALETTE.gray300,
  textDisabled: PALETTE.gray400,
  icon: PALETTE.gray200,
  iconMuted: PALETTE.gray300,

  // Borders
  border: PALETTE.gray500,
  borderMuted: PALETTE.gray600,

  // Semantic States
  success: PALETTE.green400,
  successMuted: PALETTE.green800,
  danger: PALETTE.red400,
  dangerMuted: PALETTE.red800,
  warning: PALETTE.gold400,
  warningMuted: PALETTE.gold800,
  info: PALETTE.blue400,
  infoMuted: 'rgba(107, 185, 255, 0.15)',

  // Utilities
  overlay: 'rgba(0,0,0,0.65)',
  white: PALETTE.white,
  black: PALETTE.black,
  transparent: 'transparent',
} as const;

export const LIGHT_COLORS = {
  // Brand
  primary: PALETTE.gold500,
  primaryMuted: PALETTE.gold100,
  primaryContrast: PALETTE.white,

  // Backgrounds
  bg: PALETTE.gray100,
  bgSecondary: PALETTE.white,
  bgSurface: PALETTE.white,
  bgElevated: PALETTE.gray50,
  bgMuted: PALETTE.gray100,

  // Text & Icons
  text: PALETTE.gray900,
  textMuted: PALETTE.gray400,
  textDisabled: PALETTE.gray300,
  icon: PALETTE.gray800,
  iconMuted: PALETTE.gray400,

  // Borders
  border: PALETTE.gray200,
  borderMuted: PALETTE.gray100,

  // Semantic States
  success: PALETTE.green600,
  successMuted: PALETTE.green100,
  danger: PALETTE.red600,
  dangerMuted: PALETTE.red100,
  warning: PALETTE.gold500,
  warningMuted: PALETTE.gold100,
  info: PALETTE.blue600,
  infoMuted: 'rgba(53, 99, 212, 0.15)',

  // Utilities
  overlay: 'rgba(0,0,0,0.4)',
  white: PALETTE.white,
  black: PALETTE.black,
  transparent: 'transparent',
} as const;

export type ThemeName = 'light' | 'dark' | 'blue' | 'red';

export type ThemeColors = typeof DARK_COLORS;

// We still export COLORS to satisfy some files that may not be React components (e.g., pure TS functions)
// However, components should use \`useThemeColors\` hook to support dynamic theming.
import { Appearance } from 'react-native';
export const COLORS = Appearance.getColorScheme() === 'light' ? LIGHT_COLORS : DARK_COLORS;