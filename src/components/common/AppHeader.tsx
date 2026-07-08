import MaterialIcons from '@react-native-vector-icons/material-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AppLogo from '@/components/common/AppLogo';
import ChangePasswordModal from '@/components/common/ChangePasswordModal';
import ProfileModal from '@/components/common/ProfileModal';
import { useDevice } from '@/hooks/useDevice';
import { COLORS } from '@/theme/colors';

export default function AppHeader() {
  const { isTablet } = useDevice();
  const [profileVisible, setProfileVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

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
        <View style={[styles.balanceContainer, isTablet && styles.balanceContainerTablet]}>
          <MaterialIcons
            name="account-balance-wallet"
            size={isTablet ? 28 : 22}
            color={COLORS.headerChip}
          />
          <Text style={[styles.amount, isTablet && styles.amountTablet]}>$ 12,500.00</Text>
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

const styles = StyleSheet.create({
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
    color: COLORS.headerChip,
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
