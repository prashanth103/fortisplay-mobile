import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View, Appearance, useColorScheme } from 'react-native';

import AppLogo from '@/components/common/AppLogo';
import ChangePasswordModal from '@/components/common/ChangePasswordModal';
import ProfileModal from '@/components/common/ProfileModal';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";

export default function AppHeader() {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();
  const [profileVisible, setProfileVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const scheme = useColorScheme();

  const toggleTheme = () => {
    Appearance.setColorScheme(scheme === 'dark' ? 'light' : 'dark');
  };

  const openPasswordModal = () => {
    setProfileVisible(false);
    setPasswordVisible(true);
  };

  const handleLogout = () => {
    setProfileVisible(false);
    setPasswordVisible(false);
    router.replace('/(auth)/login');
  };

  return (
    <View style={[styles.container, isTablet && styles.containerTablet]}>
      <AppLogo size={isTablet ? 72 : 56} />
      <View style={[styles.rightContainer, isTablet && styles.rightContainerTablet]}>
        <Pressable onPress={toggleTheme} style={styles.themeToggle}>
          <MaterialIcons
            name={scheme === 'dark' ? 'light-mode' : 'dark-mode'}
            size={isTablet ? 28 : 24}
            color={COLORS.textPrimary}
          />
        </Pressable>
        <View style={[styles.balanceContainer, isTablet && styles.balanceContainerTablet]}>
          <MaterialIcons
            name="account-balance-wallet"
            size={isTablet ? 28 : 22}
            color={COLORS.border}
          />
          <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.border}>$ 12,500.00</AppText>
        </View>
        <Pressable
          style={[styles.profileContainer, isTablet && styles.profileContainerTablet]}
          onPress={() => setProfileVisible(true)}
        >
          <View style={[styles.profileIconContainer, isTablet && styles.profileIconContainerTablet]}>
            <MaterialIcons
              name="person-outline"
              size={isTablet ? 28 : 24}
              color={COLORS.iconDark}
            />
          </View>
          <MaterialIcons
            name='keyboard-arrow-down'
            size={isTablet ? 28 : 22}
            color={COLORS.iconGrey}
          />
        </Pressable>
      </View>

      <ProfileModal
        visible={profileVisible}
        onClose={() => setProfileVisible(false)}
        onChangePassword={openPasswordModal}
        onLogout={handleLogout}
      />

      <ChangePasswordModal
        visible={passwordVisible}
        onClose={() => setPasswordVisible(false)}
      />
    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    paddingHorizontal: 16,
    backgroundColor: COLORS.headerbg,
  },
  containerTablet: {
    height: 88,
    paddingHorizontal: 24,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  rightContainerTablet: {
    gap: 20
  },
  themeToggle: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceContainer: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.primary,
  },
  balanceContainerTablet: {
    height: 56,
    paddingHorizontal: 22,
    borderRadius: 28,
  },
  amount: {
    color: COLORS.border,
    fontSize: 15,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  amountTablet: {
    fontSize: 20,
  },
  profileContainer: {
    height: 48,
    paddingLeft: 8,
    paddingRight: 12,
    borderRadius: 24,
    backgroundColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainerTablet: {
    height: 56,
    paddingLeft: 10,
    paddingRight: 16,
  },
  profileIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconContainerTablet: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});
