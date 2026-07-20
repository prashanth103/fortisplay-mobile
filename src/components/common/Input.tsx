import { BORDERS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';
import AppText from '@/components/common/AppText';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";

import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import { ColorValue, DimensionValue, Pressable, StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

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
        <AppText fontFamily="ManropeRegular" variant="p3" color={COLORS.text} style={{ marginBottom: isTablet ? 10 : 8 }}>
          {label}
        </AppText>
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
              color: textColor ?? COLORS.text,
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
                iconColor ?? COLORS.textMuted
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
    marginBottom: SPACING.lg,
  },

  tabletWrapper: {
    marginBottom: SPACING.xl,
  },

  label: {
    color: COLORS.text,
    marginBottom: SPACING.sm,

  },

  tabletLabel: {

    marginBottom: SPACING.md,
  },

  inputContainer: {
    height: 52,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.bgSurface,
    paddingHorizontal: SPACING.lg,

    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },

  tabletInput: {
    height: 58,
  },

  input: {
    flex: 1,
    color: COLORS.text,

    paddingVertical: 0,
  },

  tabletText: {

  },
});
