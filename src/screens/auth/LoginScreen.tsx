import AppLogo from '@/components/common/AppLogo';
import AuthInput from '@/components/common/AuthInput';
import PrimaryButton from '@/components/common/PrimaryButton';
import AuthLayout from '@/components/layout/AuthLayout';
import { useDevice } from '@/hooks/useDevice';
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
          style={[
            styles.title,
            isTablet && styles.titleTablet
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
        onPress={handleLogin}
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
    fontSize: TYPOGRAPHY.h1.size
  },
  subtitle: {
    color:
      COLORS.textSecondary,
    fontSize:
      TYPOGRAPHY.small.size,
  },
  subtitleTablet: {
    fontSize: TYPOGRAPHY.body.size
  }
});