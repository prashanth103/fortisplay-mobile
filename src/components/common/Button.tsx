import { SPACING } from '@/theme/spacing';
import React from 'react';
import AppText from '@/components/common/AppText';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';
import { RADIUS } from '@/theme/radius';
import { useThemeColors } from "@/hooks/useThemeColors";

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'cancel' | 'danger' | 'verify' | 'scan';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export default function Button({
  title,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  style,
  textStyle,
  contentStyle,
  disabled,
  activeOpacity = 0.85,
  ...touchableProps
}: Props) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const getTextColor = () => {
    switch (variant) {
      case 'primary': return COLORS.black;
      case 'outline': return COLORS.textPrimary;
      case 'ghost': return COLORS.textPrimary;
      case 'cancel': return COLORS.white;
      case 'danger': return COLORS.white;
      case 'verify': return COLORS.primary;
      case 'scan': return COLORS.white;
      default: return COLORS.black;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm': return 16;
      case 'md': return 18;
      case 'lg': return 20;
      default: return 18;
    }
  };

  return (
    <TouchableOpacity
      {...touchableProps}
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[
        styles.button,
        styles[variant as keyof typeof styles] as any,
        styles[size as keyof typeof styles] as any,
        disabled && styles.disabled,
        style,
      ]}
    >
      <View style={[styles.content, contentStyle]}>
        {leftIcon}
        <AppText
          numberOfLines={1}
          adjustsFontSizeToFit
          fontFamily="ManropeBold"
          color={getTextColor()}
          fontSize={getFontSize()}
          style={textStyle}
        >
          {title}
        </AppText>
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  button: {
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  outline: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.transparent,
  },
  ghost: {
    backgroundColor: COLORS.transparent,
  },
  cancel: {
    borderWidth: 1,
    borderColor: COLORS.textSecondary,
    backgroundColor: COLORS.transparent,
  },
  danger: {
    backgroundColor: COLORS.danger,
  },
  verify: {
    backgroundColor: COLORS.border,
  },
  scan: {
    backgroundColor: COLORS.surfaceElevated,
  },
  sm: {
    minHeight: 44,
    paddingHorizontal: SPACING.lg,
  },
  md: {
    minHeight: 52,
    paddingHorizontal: SPACING.lg,
  },
  lg: {
    minHeight: 54,
    paddingHorizontal: SPACING.xl,
  },
  disabled: {
    opacity: 0.55,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
});
