export const DARK_COLORS = {
  primary: '#E3BA4B',
  primaryLight: '#61542fff',

  background: '#090909',
  backgroundSecondary: '#111111',

  // Header Colors
  headerbg: '#1B1B1B',
  iconDark: '#202020',
  iconGrey: '#7A7A7A',


  surface: '#181818',
  surfaceElevated: '#1F1F1F',

  border: '#2A2A2A',
  borderMuted: '#222222',

  textPrimary: '#F5F5F5',
  textSecondary: '#8E8E8E',
  textMuted: '#6D6D6D',

  danger: '#F04A3A',

  finished: '#59C97D',

  payoutBackground: '#E6EFE2',

  navyCard: '#1A2436',

  walletStatIconColor: "#C89512",
  walletPrimaryDark: "#C7A84A",
  walletCard: "#1D293B",
  walletAccent: "#F6D877",
  walletLabel: "#A7B0C4",
  walletText: "#F4F6FB",
  walletSuccess: "#4FC96F",
  walletInfo: "#5B76D9",
  walletIconBackground: "#4A3D1C",
  walletHistoryCard: "#142026",

  overlay: 'rgba(0,0,0,0.65)',

  white: '#FFFFFF',
  black: '#000000',
} as const;

export const LIGHT_COLORS = {
  primary: '#C89512',
  primaryLight: '#FCF3D6',

  background: '#F7F7F5',
  backgroundSecondary: '#FFFFFF',

  // Header Colors
  headerbg: '#FFFFFF',
  iconDark: '#1A1A1A',
  iconGrey: '#8A8A8A',

  surface: '#FFFFFF',
  surfaceElevated: '#FBFBFA',

  border: '#E4E4E1',
  borderMuted: '#EDEDEB',

  textPrimary: '#161616',
  textSecondary: '#5C5C5C',
  textMuted: '#8F8F8F',

  danger: '#D6392B',

  finished: '#1E8A45',

  payoutBackground: '#E7F5EA',

  navyCard: '#EEF2F7',

  walletStatIconColor: "#9C7409",
  walletPrimaryDark: "#A87B0E",
  walletCard: "#FFFFFF",
  walletAccent: "#E9C25E",
  walletLabel: "#5B6472",
  walletText: "#151A21",
  walletSuccess: "#1E9E4A",
  walletInfo: "#3563D4",
  walletIconBackground: "#FBEDC7",
  walletHistoryCard: "#F1F4F8",

  overlay: 'rgba(0,0,0,0.4)',

  white: '#FFFFFF',
  black: '#000000',
} as const;

// export const BLUE_COLORS = {
//   primary: '#1E88E5',
//   primaryLight: '#E3F2FD',

//   background: '#F7F7F5',
//   backgroundSecondary: '#FFFFFF',

//   // Header Colors
//   headerbg: '#FFFFFF',
//   iconDark: '#1A1A1A',
//   iconGrey: '#8A8A8A',

//   surface: '#FFFFFF',
//   surfaceElevated: '#FBFBFA',

//   border: '#E4E4E1',
//   borderMuted: '#EDEDEB',

//   textPrimary: '#161616',
//   textSecondary: '#5C5C5C',
//   textMuted: '#8F8F8F',

//   danger: '#D6392B',

//   finished: '#1E8A45',

//   payoutBackground: '#E7F5EA',

//   navyCard: '#EEF2F7',

//   walletStatIconColor: "#1565C0",
//   walletPrimaryDark: "#1976D2",
//   walletCard: "#FFFFFF",
//   walletAccent: "#E9C25E",
//   walletLabel: "#5B6472",
//   walletText: "#151A21",
//   walletSuccess: "#1E9E4A",
//   walletInfo: "#3563D4",
//   walletIconBackground: "#FBEDC7",
//   walletHistoryCard: "#F1F4F8",

//   overlay: 'rgba(0,0,0,0.4)',

//   white: '#FFFFFF',
//   black: '#000000',
// } as const;

// export const RED_COLORS = {
//   primary: '#E53935',
//   primaryLight: '#FFEBEE',

//   background: '#F7F7F5',
//   backgroundSecondary: '#FFFFFF',

//   // Header Colors
//   headerbg: '#FFFFFF',
//   iconDark: '#1A1A1A',
//   iconGrey: '#8A8A8A',

//   surface: '#FFFFFF',
//   surfaceElevated: '#FBFBFA',

//   border: '#E4E4E1',
//   borderMuted: '#EDEDEB',

//   textPrimary: '#161616',
//   textSecondary: '#5C5C5C',
//   textMuted: '#8F8F8F',

//   danger: '#D6392B',

//   finished: '#1E8A45',

//   payoutBackground: '#E7F5EA',

//   navyCard: '#EEF2F7',

//   walletStatIconColor: "#C62828",
//   walletPrimaryDark: "#D32F2F",
//   walletCard: "#FFFFFF",
//   walletAccent: "#E9C25E",
//   walletLabel: "#5B6472",
//   walletText: "#151A21",
//   walletSuccess: "#1E9E4A",
//   walletInfo: "#3563D4",
//   walletIconBackground: "#FBEDC7",
//   walletHistoryCard: "#F1F4F8",

//   overlay: 'rgba(0,0,0,0.4)',

//   white: '#FFFFFF',
//   black: '#000000',
// } as const;

export type ThemeName = 'light' | 'dark' | 'blue' | 'red';

export type ThemeColors = typeof DARK_COLORS;

// We still export COLORS to satisfy some files that may not be React components (e.g., pure TS functions)
// However, components should use \`useThemeColors\` hook to support dynamic theming.
import { Appearance } from 'react-native';
export const COLORS = Appearance.getColorScheme() === 'light' ? LIGHT_COLORS : DARK_COLORS;