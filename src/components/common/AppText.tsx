import { useThemeColors } from '@/hooks/useThemeColors';
import { TYPOGRAPHY } from '@/theme/typography';
import React from 'react';
import { StyleSheet, Text, TextProps, ColorValue } from 'react-native';

export type AppTextVariant = keyof typeof TYPOGRAPHY;

interface AppTextProps extends TextProps {
  variant?: AppTextVariant;
  color?: string | ColorValue;
  fontSize?: number;
  fontFamily?: string;
}

const AppText: React.FC<AppTextProps> = ({ variant = 'p2', color, fontSize, fontFamily, style, children, ...props }) => {
  const colors = useThemeColors();
  
  const textStyle = TYPOGRAPHY[variant];

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
