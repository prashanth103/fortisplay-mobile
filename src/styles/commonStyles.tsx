
import { StyleSheet } from "react-native";

// Manrope-ExtraLight	"200"
// Manrope-Light	"300"
// Manrope-Regular	"400" (or "normal")
// Manrope-Medium	"500"
// Manrope-SemiBold	"600"
// Manrope-Bold	"700" (or "bold")
// Manrope-ExtraBold	"800"

export const createCommonStyles = (COLORS: any) => StyleSheet.create({

  // Heading
  h1: {
    fontFamily: 'ManropeExtraBold',
    color: COLORS.textPrimary,
  },
  h1Mobile: {
    fontSize: 32,
    color: COLORS.textPrimary,
  },
  h1Tablet: {
    fontSize: 36,
    color: COLORS.textPrimary,
  },
  h2: {
    fontFamily: 'ManropeExtraBold',
    color: COLORS.textPrimary,
  },
  h2Mobile: {
    fontSize: 28,
    lineHeight: 36,
    color: COLORS.textPrimary,
  },
  h2Tablet: {
    fontSize: 34,
    lineHeight: 42,
    color: COLORS.textPrimary,
  },
  h3: {
    fontSize: 22,
    fontWeight: '600',
    color: '#E0E7FF',
  },
  h4: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E0E7FF',
  },
  h5: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E0E7FF',
  },

  // SubHeading
  p1: {
    fontSize: 24,
    fontWeight: '600',
    color: '#D1D5DB',
  },
  p1Mobile: {
    fontSize: 20,
    color: '#D1D5DB',
  },
  p1Tablet: {
    fontSize: 24,
    color: '#D1D5DB',
  },
  p2: {
    fontSize: 18,
    fontWeight: '400',
    color: '#D1D5DB',
  },
  p2Mobile: {
    fontSize: 18,
    color: '#D1D5DB',
  },
  p2Tablet: {
    fontSize: 20,
    color: '#D1D5DB',
  },
  p3: {
    fontSize: 16,
    fontWeight: '400',
    color: '#D1D5DB',
  },
  p3Mobile: {
    fontSize: 14,
    color: '#D1D5DB',
  },
  p3Tablet: {
    fontSize: 16,
    color: '#D1D5DB',
  },
  p4: {
    fontSize: 14,
    fontWeight: '400',
    color: '#D1D5DB',
  },
  p4Mobile: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  p4Tablet: {
    fontSize: 14,
    color: '#D1D5DB',
  },



  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',

    borderWidth: 0,
    backgroundColor: 'transparent',

    includeFontPadding: false,
    textAlignVertical: 'center',
  }
})