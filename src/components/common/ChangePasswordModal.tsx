import { BORDERS, RADIUS, SHADOWS, SPACING } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import { useDevice } from '@/hooks/useDevice';
import Button from './Button';
import Input from './Input';
import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";

interface ChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ChangePasswordModal({
  visible,
  onClose,
}: ChangePasswordModalProps) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const closeModal = () => {
    onClose();
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, isTablet && styles.modalTablet]}>
          <View style={styles.header}>
            <AppText fontFamily="ManropeBold" variant="h4" color={COLORS.text}>Change Password</AppText>
            <Pressable
              style={styles.closeButton}
              onPress={closeModal}
            >
              <MaterialIcons
                name="close"
                size={18}
                color={COLORS.textMuted}
              />
            </Pressable>
          </View>

          <View style={styles.body}>
            <Input
              label="Current Password"
              value={currentPassword}
              placeholder="********"
              secureTextEntry
              onChangeText={setCurrentPassword}
              inputBackgroundColor={COLORS.bgSecondary}
            />

            <Input
              label="New Password"
              value={newPassword}
              placeholder="At least 6 characters"
              secureTextEntry
              onChangeText={setNewPassword}
              inputBackgroundColor={COLORS.bgSecondary}
            />

            <Input
              label="Confirm New Password"
              value={confirmPassword}
              placeholder="Re-enter new password"
              secureTextEntry
              onChangeText={setConfirmPassword}
              inputBackgroundColor={COLORS.bgSecondary}
            />

            <View style={styles.actions}>
              <Button
                title="Cancel"
                variant="outline"
                style={styles.cancelButton}
                textStyle={styles.cancelText}
                onPress={closeModal}
              />

              <Button
                title="Update"
                style={styles.updateButton}
                textStyle={styles.updateText}
                onPress={closeModal}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
    backgroundColor: 'rgba(0,0,0,0.78)',
  },
  modal: {
    width: '100%',
    maxWidth: 480,
    borderRadius: RADIUS.xl,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
    backgroundColor: COLORS.bgElevated,
    overflow: 'hidden',
    ...SHADOWS.modal,
  },
  modalTablet: {
    maxWidth: 520,
  },
  header: {
    height: 66,
    paddingHorizontal: SPACING.xxl,
    borderBottomWidth: BORDERS.ultraThin,
    borderBottomColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: RADIUS.xs,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: SPACING.xxl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.xxl,
  },
  actions: {
    flexDirection: 'row',
    gap: SPACING.lg,
    marginTop: SPACING.sm,
  },
  cancelButton: {
    flex: 0.82,
    height: 54,
    borderRadius: RADIUS.md,
    borderWidth: BORDERS.thin,
    borderColor: COLORS.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateButton: {
    flex: 1.18,
    height: 54,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: COLORS.text,

  },
  updateText: {
    color: COLORS.black,

  },
});
