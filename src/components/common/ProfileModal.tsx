import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SHADOWS, SPACING } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
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
            <AppText fontFamily="ManropeExtraBold" variant="p1" color={COLORS.text}>SO name displayed</AppText>
            <AppText fontFamily="ManropeRegular" variant="p2" color={COLORS.textMuted} style={{ marginTop: SPACING.xs }}>SO ID 400001</AppText>
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
            <AppText fontFamily="ManropeSemiBold" variant="p1" color={COLORS.text}>Change Password</AppText>
          </Pressable>

          <Pressable
            style={[styles.menuItem]}
            onPress={onLogout}
          >
            <MaterialIcons
              name="logout"
              size={isTablet ? 30 : 20}
              color={COLORS.danger}
            />
            <AppText fontFamily="ManropeSemiBold" variant="p1" color={COLORS.danger}>Logout</AppText>
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
    backgroundColor: COLORS.bgElevated,
    borderRadius: RADIUS.md,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
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
    color: COLORS.text,

  },
  tabletProfileName: {
    color: COLORS.text,

  },
  profileId: {
    marginTop: SPACING.xs,
    color: COLORS.textMuted,

  },
  tabletProfileId: {
    marginTop: SPACING.xs,
    color: COLORS.textMuted,

  },
  menuItem: {
    minHeight: 50,
    paddingHorizontal: SPACING.xxl,
    borderTopWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  tabletMenuItem: {
    minHeight: 66,
    paddingHorizontal: SPACING.xxl,
    borderTopWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xl,
  },
  menuItemText: {
    color: COLORS.text,

  },
  tabletMenuItemText: {
    color: COLORS.text,

  },
  logoutText: {
    color: COLORS.danger,

  },
  tabletLogoutText: {
    color: COLORS.danger,

  },
});
