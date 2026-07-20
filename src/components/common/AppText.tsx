import { TYPOGRAPHY } from '@/theme';
import { useThemeColors } from '@/hooks/useThemeColors';

import React from 'react';
import { StyleSheet, Text, TextProps, ColorValue } from 'react-native';

export type AppTextVariant = keyof typeof TYPOGRAPHY;

interface AppTextProps extends TextProps {
  variant?: AppTextVariant;
  color?: string | ColorValue;
}

const AppText: React.FC<AppTextProps> = ({ variant = 'p2', color, style, children, ...props }) => {
  const colors = useThemeColors();
  
  const textStyle = TYPOGRAPHY[variant];

  // Determine default color based on variant
  let defaultColor: string = colors.text;
  if (variant && variant.startsWith('p')) {
    defaultColor = colors.textMuted;
  }
  const finalColor = color || defaultColor;

  return (
    <Text 
      style={[
        textStyle, 
        { color: finalColor }, 

        style
      ]} 
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;
