import MaterialIcons from '@react-native-vector-icons/material-icons';
import { StyleSheet, Text, View } from 'react-native';

import AppLogo from '@/components/common/AppLogo';
import { useDevice } from '@/hooks/useDevice';
import { COLORS } from '@/theme/colors';

export default function AppHeader() {
  const { isTablet } = useDevice();

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
        <View style={[styles.profileContainer, isTablet && styles.profileContainerTablet]}>
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
        </View>
      </View>
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