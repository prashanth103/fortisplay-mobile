
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
  },
  h1Mobile: {
    fontSize: 32,
    lineHeight: 40,
  },
  h1Tablet: {
    fontSize: 36,
    lineHeight: 44,
  },

  h2: {
    fontFamily: 'ManropeExtraBold',
  },
  h2Mobile: {
    fontSize: 24,
    lineHeight: 30,
  },
  h2Tablet: {
    fontSize: 28,
    lineHeight: 36,
  },

  h3: {
    fontFamily: 'ManropeSemiBold',
  },
  h3Mobile: {
    fontSize: 22,
    lineHeight: 30,
  },
  h3Tablet: {
    fontSize: 26,
    lineHeight: 34,
  },

  h4: {
    fontFamily: 'ManropeSemiBold',
  },
  h4Mobile: {
    fontSize: 20,
    lineHeight: 28,
  },
  h4Tablet: {
    fontSize: 24,
    lineHeight: 32,
  },

  h5: {
    fontFamily: 'ManropeSemiBold',
  },
  h5Mobile: {
    fontSize: 18,
    lineHeight: 26,
  },
  h5Tablet: {
    fontSize: 22,
    lineHeight: 30,
  },

  // SubHeading
  p1: {
    fontFamily: 'ManropeRegular',
  },
  p1Mobile: {
    fontSize: 16,
    lineHeight: 24,
  },
  p1Tablet: {
    fontSize: 18,
    lineHeight: 28,
  },
  
  p2: {
    fontFamily: 'ManropeRegular',
  },
  p2Mobile: {
    fontSize: 14,
    lineHeight: 20,
  },
  p2Tablet: {
    fontSize: 16,
    lineHeight: 24,
  },
  
  p3: {
    fontFamily: 'ManropeRegular',
  },
  p3Mobile: {
    fontSize: 12,
    lineHeight: 18,
  },
  p3Tablet: {
    fontSize: 14,
    lineHeight: 20,
  },
})