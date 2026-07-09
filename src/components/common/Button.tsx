import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';
import { useThemeColors } from "@/hooks/useThemeColors";

type ButtonVariant = 'primary' | 'outline' | 'ghost';
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
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[
            styles.text,
            styles[`${variant}Text` as keyof typeof styles] as any,
            styles[`${size}Text` as keyof typeof styles] as any,
            textStyle,
          ]}
        >
          {title}
        </Text>
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
    backgroundColor: 'transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  sm: {
    minHeight: 44,
    paddingHorizontal: 14,
  },
  md: {
    minHeight: 52,
    paddingHorizontal: 16,
  },
  lg: {
    minHeight: 54,
    paddingHorizontal: 18,
  },
  disabled: {
    opacity: 0.55,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontWeight: '700',
  },
  primaryText: {
    color: COLORS.black,
  },
  outlineText: {
    color: COLORS.textPrimary,
  },
  ghostText: {
    color: COLORS.textPrimary,
  },
  smText: {
    fontSize: TYPOGRAPHY.body.size,
  },
  mdText: {
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },
  lgText: {
    fontSize: 20,
  },
});
