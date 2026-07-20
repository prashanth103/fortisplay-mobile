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
  transparent: 'transparent',

  // Component specific colors
  badgeBackgroundDark: '#3B3323',
  avatarYellow: '#F8D44E',
  avatarBlue: '#6BB9FF',
  avatarGreen: '#58D16A',
  avatarOrange: '#F28B34',
  avatarGrey: '#D9D9D9',
  avatarRed: '#F15151',
  avatarGreenLight: '#5FD27C',

  tableHeader: '#7F7F7F',
  successText: '#2B7A37',
  successBackground: '#D9F4E0',
  neutralBackground: '#F2F2F2',
  neutralText: '#4F4F4F',
  warningBackground: '#FEF4CC',
  warningText: '#B08B24',
  highlightBackground: '#FAE5B2',

  inactiveBackground: '#888888',

  runnerCardBackground: '#3B3323',
  resultRowBorder: '#4D3C18',
  raceSelectorText: '#6B5220',

  liveRaceText: '#FF6A55',
  liveRaceBackground: '#351B17',
  liveRaceBorder: '#7A2A1F',
  surfaceSecondary: '#242424',

  betTypeTabBackground: '#3B3323',

  // Stripes Background
  stripedBackground1: '#191919',
  stripedBackground2: '#222222',
  stripedBackgroundAlt1: '#141414',
  stripedBackgroundAlt2: '#1D1D1D',

  logoutIcon: '#FF806F',
  logoutText: '#FF8B7E',
  modalBorder: '#3A3A3A',
  inputBorderFocused: '#555555',

  ticketGold: '#B27D00',
  ticketBorder: '#ECECEC',
  ticketBackground: '#1F1F1F',
  watchBackground: '#191919',
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
  transparent: 'transparent',

  // Component specific colors
  badgeBackgroundDark: '#3B3323',
  avatarYellow: '#F8D44E',
  avatarBlue: '#6BB9FF',
  avatarGreen: '#58D16A',
  avatarOrange: '#F28B34',
  avatarGrey: '#D9D9D9',
  avatarRed: '#F15151',
  avatarGreenLight: '#5FD27C',

  tableHeader: '#7F7F7F',
  successText: '#2B7A37',
  successBackground: '#D9F4E0',
  neutralBackground: '#F2F2F2',
  neutralText: '#4F4F4F',
  warningBackground: '#FEF4CC',
  warningText: '#B08B24',
  highlightBackground: '#FAE5B2',

  inactiveBackground: '#888888',

  runnerCardBackground: '#3B3323',
  resultRowBorder: '#4D3C18',
  raceSelectorText: '#6B5220',

  liveRaceText: '#FF6A55',
  liveRaceBackground: '#351B17',
  liveRaceBorder: '#7A2A1F',
  surfaceSecondary: '#242424',

  betTypeTabBackground: '#3B3323',

  // Stripes Background
  stripedBackground1: '#191919',
  stripedBackground2: '#222222',
  stripedBackgroundAlt1: '#141414',
  stripedBackgroundAlt2: '#1D1D1D',

  logoutIcon: '#FF806F',
  logoutText: '#FF8B7E',
  modalBorder: '#3A3A3A',
  inputBorderFocused: '#555555',

  ticketGold: '#B27D00',
  ticketBorder: '#ECECEC',
  ticketBackground: '#1F1F1F',
  watchBackground: '#191919',
} as const;

export type ThemeName = 'light' | 'dark' | 'blue' | 'red';

export type ThemeColors = typeof DARK_COLORS;

// We still export COLORS to satisfy some files that may not be React components (e.g., pure TS functions)
// However, components should use \`useThemeColors\` hook to support dynamic theming.
import { Appearance } from 'react-native';
export const COLORS = Appearance.getColorScheme() === 'light' ? LIGHT_COLORS : DARK_COLORS;