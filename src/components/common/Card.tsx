import { useThemeColors } from '@/hooks/useThemeColors';
import { BORDERS, OPACITY, RADIUS, SHADOWS, SPACING } from '@/theme';
import React from 'react';
import { DimensionValue, StyleProp, StyleSheet, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';

export type CardVariant = 'elevated' | 'outlined' | 'flat';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type CardRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding | number;
  radius?: CardRadius | number;
  shadow?: keyof typeof SHADOWS;
  border?: keyof typeof BORDERS;
  borderColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
}

export default function Card({
  children,
  variant = 'flat',
  padding = 'lg',
  radius = 'xl',
  shadow,
  border,
  borderColor,
  onPress,
  style,
  backgroundColor,
  width,
  height,
  ...touchableProps
}: CardProps) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const cardStyle = [
    styles.base,
    styles[`variant_${variant}`],
    {
      padding: padding === 'none' ? 0 : (typeof padding === 'number' ? padding : SPACING[padding]),
      borderRadius: radius === 'none' ? 0 : (typeof radius === 'number' ? radius : RADIUS[radius]),
      backgroundColor: backgroundColor || COLORS.surface,
      width: width,
      height: height,
      ...(shadow ? SHADOWS[shadow] : {}),
      ...(border ? { borderWidth: BORDERS[border], borderColor: borderColor || COLORS.border } : {}),
    },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={OPACITY.active}
        onPress={onPress}
        style={cardStyle}
        {...touchableProps}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyle}>{children}</View>;
}

const createStyles = (COLORS: any) =>
  StyleSheet.create({
    base: {
      width: '100%',
    },
    variant_elevated: {
      ...SHADOWS.card,
    },
    variant_outlined: {
      borderWidth: BORDERS.ultraThin,
      borderColor: COLORS.border,
    },
    variant_flat: {
      // Just flat surface
    },
  });
