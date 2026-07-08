import { useDevice } from '@/hooks/useDevice';
import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useState } from 'react';
import {
  ColorValue,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  inputBackgroundColor?: ColorValue;
}

export default function AuthInput({
  label,
  value,
  placeholder,
  onChangeText,
  leftIcon,
  rightIcon,
  secureTextEntry,
  inputBackgroundColor,
}: Props) {
  const { isTablet } = useDevice();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isPasswordInput = Boolean(secureTextEntry);

  return (

    <View style={[
      styles.wrapper,
      isTablet && styles.tabletWrapper
    ]}>
      <Text style={[
        styles.label,
        isTablet && styles.tabletLabel
      ]}>
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          isTablet && styles.tabletInput,
          inputBackgroundColor && { backgroundColor: inputBackgroundColor },
        ]}
      >
        {leftIcon}
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            COLORS.textMuted
          }
          secureTextEntry={
            isPasswordInput && !passwordVisible
          }
          onChangeText={onChangeText}
          style={[
            styles.input,
            leftIcon ? styles.inputWithLeftIcon : styles.inputWithoutLeftIcon,
            (rightIcon || isPasswordInput) ? styles.inputWithRightIcon : styles.inputWithoutRightIcon,
            isTablet && styles.tabletText
          ]}
        />
        {isPasswordInput ? (
          <Pressable
            onPress={() => setPasswordVisible((visible) => !visible)}
            hitSlop={10}
          >
            <MaterialIcons
              name={passwordVisible ? 'visibility-off' : 'visibility'}
              size={20}
              color={COLORS.textSecondary}
            />
          </Pressable>
        ) : (
          rightIcon
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor:
      COLORS.surface,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabletInput: {
    height: 58
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.body.size,
    fontWeight: '600',
  },
  inputWithLeftIcon: {
    marginLeft: 12,
  },
  inputWithoutLeftIcon: {
    marginLeft: 0,
  },
  inputWithRightIcon: {
    marginRight: 12,
  },
  inputWithoutRightIcon: {
    marginRight: 0,
  },
  tabletText: {
    fontSize: 18
  }
});
