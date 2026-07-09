import { useDevice } from '@/hooks/useDevice';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import {
  ColorValue,
  DimensionValue,
  Pressable,
  StyleSheet,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { useThemeColors } from "@/hooks/useThemeColors";

interface Props extends TextInputProps {
  label?: string;

  leftIcon?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightIcon?: React.ReactNode;

  inputBackgroundColor?: ColorValue;
  borderColor?: ColorValue;
  textColor?: ColorValue;
  placeholderColor?: ColorValue;
  iconColor?: ColorValue;

  width?: DimensionValue;
  height?: number;
  wrapperStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
}

export default function Input({
  label,

  leftIcon,
  leftContent,
  rightIcon,

  inputBackgroundColor,
  borderColor,
  textColor,
  placeholderColor,
  iconColor,

  width,
  height,
  wrapperStyle,
  inputContainerStyle,

  secureTextEntry,

  style,

  ...textInputProps
}: Props) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const isPasswordInput = Boolean(secureTextEntry);

  return (
    <View
      style={[
        styles.wrapper,
        isTablet && styles.tabletWrapper,
        width !== undefined && { width },
        wrapperStyle,
      ]}
    >
      {label && (
        <Text
          style={[
            styles.label,
            isTablet && styles.tabletLabel,
          ]}
        >
          {label}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          isTablet && styles.tabletInput,
          inputBackgroundColor && {
            backgroundColor: inputBackgroundColor,
          },
          borderColor && {
            borderColor,
          },
          height !== undefined && {
            height,
          },
          inputContainerStyle,
        ]}
      >
        {leftContent ?? leftIcon}

        <TextInput
          {...textInputProps}
          secureTextEntry={
            isPasswordInput && !passwordVisible
          }
          placeholderTextColor={
            placeholderColor ?? COLORS.textMuted
          }
          cursorColor={
            iconColor ?? COLORS.primary
          }
          style={[
            styles.input,
            isTablet && styles.tabletText,
            {
              color: textColor ?? COLORS.textPrimary,
            },
            style,
          ]}
        />

        {isPasswordInput ? (
          <Pressable
            hitSlop={10}
            onPress={() =>
              setPasswordVisible(!passwordVisible)
            }
          >
            <MaterialIcons
              name={
                passwordVisible
                  ? 'visibility-off'
                  : 'visibility'
              }
              size={20}
              color={
                iconColor ?? COLORS.textSecondary
              }
            />
          </Pressable>
        ) : (
          rightIcon
        )}
      </View>
    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },

  tabletWrapper: {
    marginBottom: 18,
  },

  label: {
    color: COLORS.white,
    marginBottom: 8,
    fontSize: TYPOGRAPHY.label.size,
    fontWeight: '600',
  },

  tabletLabel: {
    fontSize: 14,
    marginBottom: 10,
  },

  inputContainer: {
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  tabletInput: {
    height: 58,
  },

  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body.size,
    fontWeight: '600',
    paddingVertical: 0,
  },

  tabletText: {
    fontSize: 18,
  },
});
