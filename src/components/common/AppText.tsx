import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from '@/hooks/useThemeColors';
import { createCommonStyles } from '@/styles/commonStyles';
import React from 'react';
import { StyleSheet, Text, TextProps, ColorValue } from 'react-native';

export type AppTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p1' | 'p2' | 'p3';

interface AppTextProps extends TextProps {
  variant?: AppTextVariant;
  color?: string | ColorValue;
  fontSize?: number;
  fontFamily?: string;
}

const AppText: React.FC<AppTextProps> = ({ variant = 'p2', color, fontSize, fontFamily, style, children, ...props }) => {
  const { isTablet } = useDevice();
  const colors = useThemeColors();
  const commonStyles = createCommonStyles(colors);

  // Start with the base style for the variant (e.g. h1, p1)
  let textStyle = commonStyles[variant] as any;

  // Append device-specific style if it exists (e.g. h1Tablet, h1Mobile)
  if (isTablet) {
    const tabletVariant = `${variant}Tablet` as keyof typeof commonStyles;
    if (commonStyles[tabletVariant]) {
      textStyle = StyleSheet.compose(textStyle, commonStyles[tabletVariant] as any);
    }
  } else {
    const mobileVariant = `${variant}Mobile` as keyof typeof commonStyles;
    if (commonStyles[mobileVariant]) {
      textStyle = StyleSheet.compose(textStyle, commonStyles[mobileVariant] as any);
    }
  }

  // Determine default color based on variant
  let defaultColor: string = colors.textPrimary;
  if (variant && variant.startsWith('p')) {
    defaultColor = colors.textSecondary;
  }
  const finalColor = color || defaultColor;

  return (
    <Text 
      style={[
        textStyle, 
        { color: finalColor }, 
        fontSize ? { fontSize } : undefined,
        fontFamily ? { fontFamily } : undefined,
        style
      ]} 
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;
