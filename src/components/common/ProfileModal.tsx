import { RADIUS } from '@/theme/radius';
import { SHADOWS } from '@/theme/shadows';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
  onChangePassword: () => void;
  onLogout: () => void;
}

export default function ProfileModal({
  visible,
  onClose,
  onChangePassword,
  onLogout,
}: ProfileModalProps) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <Pressable
          style={[
            styles.menu,
            isTablet && styles.menuTablet,
          ]}
          onPress={(event) => event.stopPropagation()}
        >
          <View style={styles.identity}>
            <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>SO name displayed</AppText>
            <AppText variant="p2" fontFamily="ManropeExtraBold" color={COLORS.textSecondary} style={{ marginTop: SPACING.xs }}>SO ID 400001</AppText>
          </View>

          <Pressable
            style={[styles.menuItem]}
            onPress={onChangePassword}
          >
            <MaterialIcons
              name="lock-outline"
              size={isTablet ? 30 : 20}
              color={COLORS.primary}
            />
            <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>Change Password</AppText>
          </Pressable>

          <Pressable
            style={[styles.menuItem]}
            onPress={onLogout}
          >
            <MaterialIcons
              name="logout"
              size={isTablet ? 30 : 20}
              color={COLORS.logoutIcon}
            />
            <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.logoutText}>Logout</AppText>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menu: {
    position: 'absolute',
    top: 68,
    right: 16,
    width: 250,
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.modalBorder,
    overflow: 'hidden',
    ...SHADOWS.dropdown,
  },
  menuTablet: {
    top: 84,
    right: 24,
    width: 320,
  },
  identity: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },
  tabletIdentity: {
    paddingHorizontal: SPACING.xxl,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xl,
  },
  profileName: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletProfileName: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  profileId: {
    marginTop: SPACING.xs,
    color: COLORS.textSecondary,
    fontSize: 13,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletProfileId: {
    marginTop: SPACING.xs,
    color: COLORS.textSecondary,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  menuItem: {
    minHeight: 50,
    paddingHorizontal: SPACING.xxl,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  tabletMenuItem: {
    minHeight: 66,
    paddingHorizontal: SPACING.xxl,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  menuItemText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletMenuItemText: {
    color: COLORS.textPrimary,
    fontSize: 19,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  logoutText: {
    color: COLORS.logoutText,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletLogoutText: {
    color: COLORS.logoutText,
    fontSize: 19,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
});
