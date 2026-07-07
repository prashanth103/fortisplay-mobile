import AppLogo from '@/components/common/AppLogo';
import AuthInput from '@/components/common/AuthInput';
import PrimaryButton from '@/components/common/PrimaryButton';
import AuthLayout from '@/components/layout/AuthLayout';
import { COLORS } from '@/theme/colors';
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoginScreen() {

  const [soId, setSoId] =
    useState('400001');

  const [password,
    setPassword] =
    useState('');

  return (
    <AuthLayout>

      <View style={styles.header}>
        <AppLogo size={100} />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to your gaming station</Text>
      </View>

      <AuthInput
        label="SO ID"
        value={soId}
        onChangeText={setSoId}
        leftIcon={
          <MaterialIcons
            name="person-outline"
            size={20}
            color={COLORS.textSecondary}
          />
        }
      />

      <AuthInput
        label="Password"
        value={password}
        placeholder="Enter password"
        secureTextEntry
        onChangeText={setPassword}
        leftIcon={
          <MaterialIcons
            name="lock-outline"
            size={20}
            color={COLORS.textSecondary}
          />
        }
        rightIcon={
          <MaterialIcons
            name="visibility"
            size={20}
            color={COLORS.textSecondary}
          />
        }
      />

      <PrimaryButton
        title="Sign In"
        onPress={() => { }}
      />

    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    color:
      COLORS.textPrimary,
    fontSize:
      TYPOGRAPHY.h2.size,
    fontWeight: '700',
  },
  subtitle: {
    color:
      COLORS.textSecondary,
    fontSize:
      TYPOGRAPHY.small.size,
  },
});