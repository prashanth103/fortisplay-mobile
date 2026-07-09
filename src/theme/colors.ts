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
  primary: '#E3BA4B',
  primaryHover: '#D5AE42',
  primaryLight: '#F5E6B3',

  background: '#F5F5F5',
  backgroundSecondary: '#FFFFFF',

  // Header Colors
  headerbg: '#FFFFFF',
  headerChip: '#EEEEEE',
  iconDark: '#202020',
  iconGrey: '#7A7A7A',

  surface: '#FFFFFF',
  surfaceElevated: '#F9F9F9',
  surfaceActive: '#FFF6D9',

  border: '#CCCCCC',
  borderMuted: '#E0E0E0',
  borderPrimary: '#E3BA4B',

  textPrimary: '#111111',
  textSecondary: '#666666',
  textMuted: '#999999',

  success: '#2B7A37',
  warning: '#C89512',
  danger: '#D32F2F',

  live: '#D32F2F',
  finished: '#2B7A37',

  pending: '#C89512',

  won: '#2B7A37',

  lost: '#9A9A9A',

  payoutBackground: '#E6EFE2',
  payoutText: '#2B7A37',

  errorBackground: '#FFEBEE',
  errorText: '#D32F2F',

  navyCard: '#F0F4F8',

  walletPrimary: "#E5BE52",
  walletStatIconBg: "#F8EBC5",
  walletStatIconColor: "#C89512",
  walletPrimaryDark: "#C7A84A",
  walletSecondary: "#E2E8F0",
  walletCard: "#FFFFFF",
  walletCardAlt: "#F8FAFC",
  walletAccent: "#F6D877",
  walletLabel: "#475569",
  walletText: "#0F172A",
  walletSuccess: "#22C55E",
  walletDanger: "#EF4444",
  walletInfo: "#3B82F6",
  walletLight: "#F5F5F5",
  walletIconBackground: "#FEF3C7",
  walletHistoryCard: "#F1F5F9",

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