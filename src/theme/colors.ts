export const DARK_COLORS = {
  primary: '#E3BA4B',
  primaryHover: '#D5AE42',
  primaryLight: '#61542fff',

  background: '#090909',
  backgroundSecondary: '#111111',

  // Header Colors
  headerbg: '#1B1B1B',
  headerChip: '#2A2A2A',
  iconDark: '#202020',
  iconGrey: '#7A7A7A',


  surface: '#181818',
  surfaceElevated: '#1F1F1F',
  surfaceActive: '#2B2417',

  border: '#2A2A2A',
  borderMuted: '#222222',
  borderPrimary: '#E3BA4B',

  textPrimary: '#F5F5F5',
  textSecondary: '#8E8E8E',
  textMuted: '#6D6D6D',

  success: '#5FD27C',
  warning: '#E3BA4B',
  danger: '#F04A3A',

  live: '#F04A3A',
  finished: '#59C97D',

  pending: '#E3BA4B',

  won: '#59C97D',

  lost: '#9A9A9A',

  payoutBackground: '#E6EFE2',

  payoutText: '#2B7A37',

  errorBackground: '#321515',

  errorText: '#FF7C6A',

  navyCard: '#1A2436',

  walletPrimary: "#E5BE52",
  walletStatIconBg: "#F8EBC5",
  walletStatIconColor: "#C89512",
  walletPrimaryDark: "#C7A84A",
  walletSecondary: "#1C2638",
  walletCard: "#1D293B",
  walletCardAlt: "#101828",
  walletAccent: "#F6D877",
  walletLabel: "#A7B0C4",
  walletText: "#F4F6FB",
  walletSuccess: "#4FC96F",
  walletDanger: "#F04A3A",
  walletInfo: "#5B76D9",
  walletLight: "#F5F5F5",
  walletIconBackground: "#4A3D1C",
  walletHistoryCard: "#142026",

  overlay: 'rgba(0,0,0,0.65)',

  modalOverlay: 'rgba(0,0,0,0.72)',

  white: '#FFFFFF',
  black: '#000000',
} as const;

export const LIGHT_COLORS = {
  primary: '#C89512',
  primaryHover: '#B3860F',
  primaryLight: '#FCF3D6',

  background: '#F7F7F5',
  backgroundSecondary: '#FFFFFF',

  // Header Colors
  headerbg: '#FFFFFF',
  headerChip: '#F1F1EF',
  iconDark: '#1A1A1A',
  iconGrey: '#8A8A8A',

  surface: '#FFFFFF',
  surfaceElevated: '#FBFBFA',
  surfaceActive: '#FDF3D9',

  border: '#E4E4E1',
  borderMuted: '#EDEDEB',
  borderPrimary: '#C89512',

  textPrimary: '#161616',
  textSecondary: '#5C5C5C',
  textMuted: '#8F8F8F',

  success: '#1E8A45',
  warning: '#B3860F',
  danger: '#D6392B',

  live: '#D6392B',
  finished: '#1E8A45',

  pending: '#B3860F',

  won: '#1E8A45',

  lost: '#8A8A8A',

  payoutBackground: '#E7F5EA',
  payoutText: '#1E8A45',

  errorBackground: '#FCEAE8',
  errorText: '#D6392B',

  navyCard: '#EEF2F7',

  walletPrimary: "#C89512",
  walletStatIconBg: "#FBEDC7",
  walletStatIconColor: "#9C7409",
  walletPrimaryDark: "#A87B0E",
  walletSecondary: "#EDF0F5",
  walletCard: "#FFFFFF",
  walletCardAlt: "#F6F8FB",
  walletAccent: "#E9C25E",
  walletLabel: "#5B6472",
  walletText: "#151A21",
  walletSuccess: "#1E9E4A",
  walletDanger: "#DC3B30",
  walletInfo: "#3563D4",
  walletLight: "#F7F7F5",
  walletIconBackground: "#FBEDC7",
  walletHistoryCard: "#F1F4F8",

  overlay: 'rgba(0,0,0,0.4)',
  modalOverlay: 'rgba(0,0,0,0.5)',

  white: '#FFFFFF',
  black: '#000000',
} as const;

export type ThemeColors = typeof DARK_COLORS;

// We still export COLORS to satisfy some files that may not be React components (e.g., pure TS functions)
// However, components should use \`useThemeColors\` hook to support dynamic theming.
import { Appearance } from 'react-native';
export const COLORS = Appearance.getColorScheme() === 'light' ? LIGHT_COLORS : DARK_COLORS;