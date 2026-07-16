import { COLORS } from './colors';

export const SHADOWS = {
  button: {
    shadowColor: COLORS.primary,
    shadowOpacity: 0.30,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  buttonDanger: {
    shadowColor: COLORS.danger,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  card: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  modal: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.45,
    shadowRadius: 80,
    shadowOffset: { width: 0, height: 24 },
    elevation: 15,
  },
  dropdown: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.35,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  sheet: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.45,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: -10 },
    elevation: 20,
  },
  glow: {
    shadowColor: COLORS.primary,
    shadowOpacity: 0.12,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  wallet: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.30,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  betSlip: {
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 20,
  },
  avatar: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  }
} as const;