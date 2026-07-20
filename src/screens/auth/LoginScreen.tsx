import AppLogo from '@/components/common/AppLogo';
import AppText from '@/components/common/AppText';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import AuthLayout from '@/components/layout/AuthLayout';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import { OPACITY, SHADOWS, SPACING } from '@/theme';

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
        <AppText fontFamily="ManropeExtraBold"
          variant="h3"
          color={COLORS.text}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          Welcome back
        </AppText>
        <AppText fontFamily="ManropeRegular" variant="p2">
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
            color={COLORS.textMuted}
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
            color={COLORS.textMuted}
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
        activeOpacity={OPACITY.activeHigh}
      />

    </AuthLayout>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: SPACING.huge,
  },
  headerTablet: {
    marginBottom: SPACING.huge
  },
  signInButton: {
    height: 54,
    marginTop: SPACING.xl,
    ...SHADOWS.button,
  },
  signInButtonTablet: {
    height: 60,
  },
  signInText: {

  },
  signInTextTablet: {

  }
});
