import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
            <Text style={[styles.profileName, isTablet && styles.tabletProfileName]}>SO name displayed</Text>
            <Text style={[styles.profileId, isTablet && styles.tabletProfileId]}>SO ID 400001</Text>
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
            <Text style={[styles.menuItemText, isTablet && styles.tabletMenuItemText]}>Change Password</Text>
          </Pressable>

          <Pressable
            style={[styles.menuItem]}
            onPress={onLogout}
          >
            <MaterialIcons
              name="logout"
              size={isTablet ? 30 : 20}
              color="#FF806F"
            />
            <Text style={[styles.logoutText, isTablet && styles.tabletLogoutText]}>Logout</Text>
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
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.34,
    shadowRadius: 24,
    elevation: 16,
  },
  menuTablet: {
    top: 84,
    right: 24,
    width: 320,
  },
  identity: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 18,
  },
  tabletIdentity: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 20,
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
    marginTop: 4,
    color: COLORS.textSecondary,
    fontSize: 13,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletProfileId: {
    marginTop: 4,
    color: COLORS.textSecondary,
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  menuItem: {
    minHeight: 50,
    paddingHorizontal: 22,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
  },
  tabletMenuItem: {
    minHeight: 66,
    paddingHorizontal: 22,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
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
    color: '#FF8B7E',
    fontSize: 16,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  tabletLogoutText: {
    color: '#FF8B7E',
    fontSize: 19,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
});
