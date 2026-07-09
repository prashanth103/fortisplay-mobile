import { COLORS } from "./colors";

export const TYPOGRAPHY = {
  display: {
    size: 36,
    weight: 700,
    lineHeight: 44,
  },

  h1: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'manrope'
  },

  h2: {
    size: 28,
    weight: 700,
    lineHeight: 36,
  },

  h3: {
    size: 24,
    weight: 700,
    lineHeight: 32,
  },

  title: {
    size: 20,
    weight: 700,
    lineHeight: 28,
  },

  bodyLarge: {
    size: 18,
    weight: 500,
    lineHeight: 28,
  },

  body: {
    size: 16,
    weight: 500,
    lineHeight: 24,
  },

  small: {
    size: 14,
    weight: 500,
    lineHeight: 20,
  },

  caption: {
    size: 12,
    weight: 500,
    lineHeight: 16,
  },

  label: {
    size: 13,
    weight: 600,
    lineHeight: 18
  },

  tag: {
    size: 11,
    weight: 700,
    lineHeight: 14
  },

  stat: {
    size: 34,
    weight: 800,
    lineHeight: 42
  },

  amount: {
    size: 40,
    weight: 800,
    lineHeight: 48
  }
} as const;