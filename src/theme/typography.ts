import { COLORS } from "./colors";

export const TYPOGRAPHY = {
  h1: { fontSize: 36, lineHeight: 44, fontFamily: "ManropeExtraBold" },
  h2: { fontSize: 28, lineHeight: 36, fontFamily: "ManropeExtraBold" },
  h3: { fontSize: 24, lineHeight: 32, fontFamily: "ManropeBold" },
  h4: { fontSize: 20, lineHeight: 28, fontFamily: "ManropeBold" },
  h5: { fontSize: 18, lineHeight: 26, fontFamily: "ManropeBold" },
  p1: { fontSize: 16, lineHeight: 24, fontFamily: "ManropeRegular" },
  p2: { fontSize: 14, lineHeight: 20, fontFamily: "ManropeRegular" },
  p3: { fontSize: 12, lineHeight: 18, fontFamily: "ManropeRegular" },
  
  display: { fontSize: 36, lineHeight: 44, fontFamily: "ManropeExtraBold" },
  title: { fontSize: 20, lineHeight: 28, fontFamily: "ManropeBold" },
  bodyLarge: { fontSize: 18, lineHeight: 28, fontFamily: "ManropeMedium" },
  body: { fontSize: 16, lineHeight: 24, fontFamily: "ManropeRegular" },
  small: { fontSize: 14, lineHeight: 20, fontFamily: "ManropeMedium" },
  caption: { fontSize: 12, lineHeight: 16, fontFamily: "ManropeMedium" },
  label: { fontSize: 13, lineHeight: 18, fontFamily: "ManropeSemiBold" },
  tag: { fontSize: 11, lineHeight: 14, fontFamily: "ManropeBold" },
  stat: { fontSize: 34, lineHeight: 42, fontFamily: "ManropeExtraBold" },
  amount: { fontSize: 40, lineHeight: 48, fontFamily: "ManropeExtraBold" }
} as const;