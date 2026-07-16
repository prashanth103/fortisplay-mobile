import AppLogo from '@/components/common/AppLogo';
import AppText from '@/components/common/AppText';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import AuthLayout from '@/components/layout/AuthLayout';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { router } from 'expo-router';
import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';

export default function LoginScreen() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const { isTablet } = useDevice();

  const [soId, setSoId] = useState('400001');

  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(tabs)');
  };

  return (
    <AuthLayout>

      <View
        style={[
          styles.header,
          isTablet && styles.headerTablet
        ]}
      >
        <AppLogo size={isTablet ? 120 : 100} />
        <AppText
          variant="h3"
          fontFamily='ManropeExtraBold'
          color={COLORS.textPrimary}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          Welcome back
        </AppText>
        <AppText variant="p2">
          Sign in to your gaming station
        </AppText>
      </View>

      <Input
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

      <Input
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
      />

      <Button
        title="Sign In"
        onPress={handleLogin}
        style={[
          styles.signInButton,
          isTablet && styles.signInButtonTablet,
        ]}
        textStyle={[
          styles.signInText,
          isTablet && styles.signInTextTablet,
        ]}
        activeOpacity={0.9}
      />

    </AuthLayout>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  headerTablet: {
    marginBottom: 56
  },
  signInButton: {
    height: 54,
    marginTop: 20,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.30,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
  signInButtonTablet: {
    height: 60,
  },
  signInText: {
    fontSize: TYPOGRAPHY.bodyLarge.fontSize,
  },
  signInTextTablet: {
    fontSize: 20,
  }
});
