import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';
import React from 'react';
import {
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
}

export default function AuthInput({
  label,
  value,
  placeholder,
  onChangeText,
  leftIcon,
  rightIcon,
  secureTextEntry,
}: Props) {

  return (

    <View style={styles.wrapper}>
      <Text style={styles.label}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        {leftIcon}
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            COLORS.textMuted
          }
          secureTextEntry={
            secureTextEntry
          }
          onChangeText={onChangeText}
          style={styles.input}
        />
        {rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 14,
  },
  label: {
    color: COLORS.white,
    marginBottom: 8,
    fontSize: TYPOGRAPHY.label.size,
    fontWeight: '600',
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
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    marginHorizontal: 12,
    fontSize: TYPOGRAPHY.body.size,
    fontWeight: '600',
  },
});