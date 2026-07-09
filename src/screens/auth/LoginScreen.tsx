import AppLogo from '@/components/common/AppLogo';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import AuthLayout from '@/components/layout/AuthLayout';
import { useDevice } from '@/hooks/useDevice';
import { commonStyles } from '@/styles/commonStyles';
import { COLORS } from '@/theme/colors';
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function LoginScreen() {

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
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={[
            commonStyles.h2,
            isTablet ? commonStyles.h2Tablet : commonStyles.h2Mobile
          ]}
        >
          Welcome back
        </Text>
        <Text
          style={[
            styles.subtitle,
            isTablet && styles.subtitleTablet
          ]}
        >
          Sign in to your gaming station
        </Text>
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

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  headerTablet: {
    marginBottom: 56
  },
  title: {
    color:
      COLORS.textPrimary,
    fontSize:
      TYPOGRAPHY.h2.size,
    fontWeight: '700',
  },
  titleTablet: {
    fontSize: TYPOGRAPHY.h1.fontSize
  },
  subtitle: {
    color:
      COLORS.textSecondary,
    fontSize:
      TYPOGRAPHY.small.size,
  },
  subtitleTablet: {
    fontSize: TYPOGRAPHY.body.size
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
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },
  signInTextTablet: {
    fontSize: 20,
  }
});
