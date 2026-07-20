import AppText from '@/components/common/AppText';
import { RADIUS, SPACING } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import AppLogo from '@/components/common/AppLogo';
import ChangePasswordModal from '@/components/common/ChangePasswordModal';
import ProfileModal from '@/components/common/ProfileModal';
import { ThemeContext } from '@/context/ThemeContext';
import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import React, { useContext } from "react";

export default function AppHeader() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();
  const [profileVisible, setProfileVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { themeName, setThemeName } = useContext(ThemeContext);

  const toggleTheme = () => {
    setThemeName(themeName === 'dark' ? 'light' : 'dark');
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
            name={themeName === 'dark' ? 'light-mode' : 'dark-mode'}
            size={isTablet ? 28 : 24}
            color={COLORS.text}
          />
        </Pressable>
        <View style={[styles.balanceContainer, isTablet && styles.balanceContainerTablet]}>
          <MaterialIcons
            name="account-balance-wallet"
            size={isTablet ? 28 : 22}
            color={COLORS.border}
          />
          <AppText fontFamily="ManropeExtraBold" variant="p1" color={COLORS.border}>$ 12,500.00</AppText>
        </View>
        <Pressable
          style={[styles.profileContainer, isTablet && styles.profileContainerTablet]}
          onPress={() => setProfileVisible(true)}
        >
          <View style={[styles.profileIconContainer, isTablet && styles.profileIconContainerTablet]}>
            <MaterialIcons
              name="person-outline"
              size={isTablet ? 28 : 24}
              color={COLORS.black}
            />
          </View>
          <MaterialIcons
            name='keyboard-arrow-down'
            size={isTablet ? 28 : 22}
            color={COLORS.iconMuted}
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
    paddingHorizontal: SPACING.lg,
    backgroundColor: COLORS.bgSecondary,
  },
  containerTablet: {
    height: 88,
    paddingHorizontal: SPACING.xxl,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md
  },
  rightContainerTablet: {
    gap: SPACING.xl
  },
  themeToggle: {
    padding: SPACING.sm,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceContainer: {
    height: 44,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.xxl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.primary,
  },
  balanceContainerTablet: {
    height: 56,
    paddingHorizontal: SPACING.xxl,
    borderRadius: RADIUS.xxxl,
  },
  amount: {
    color: COLORS.border,

  },
  amountTablet: {

  },
  profileContainer: {
    height: 48,
    paddingLeft: SPACING.sm,
    paddingRight: SPACING.md,
    borderRadius: RADIUS.xxl,
    backgroundColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainerTablet: {
    height: 56,
    paddingLeft: SPACING.md,
    paddingRight: SPACING.lg,
  },
  profileIconContainer: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.xxl,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconContainerTablet: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.xxl,
  },
});
