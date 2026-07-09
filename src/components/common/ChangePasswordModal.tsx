import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useDevice } from '@/hooks/useDevice';
import { COLORS } from '@/theme/colors';
import Button from './Button';
import Input from './Input';

interface ChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ChangePasswordModal({
  visible,
  onClose,
}: ChangePasswordModalProps) {
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
            <Text style={styles.title}>Change Password</Text>
            <Pressable
              style={styles.closeButton}
              onPress={closeModal}
            >
              <MaterialIcons
                name="close"
                size={18}
                color={COLORS.textSecondary}
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
              inputBackgroundColor={COLORS.backgroundSecondary}
            />

            <Input
              label="New Password"
              value={newPassword}
              placeholder="At least 6 characters"
              secureTextEntry
              onChangeText={setNewPassword}
              inputBackgroundColor={COLORS.backgroundSecondary}
            />

            <Input
              label="Confirm New Password"
              value={confirmPassword}
              placeholder="Re-enter new password"
              secureTextEntry
              onChangeText={setConfirmPassword}
              inputBackgroundColor={COLORS.backgroundSecondary}
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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.78)',
  },
  modal: {
    width: '100%',
    maxWidth: 480,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    backgroundColor: COLORS.surfaceElevated,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.38,
    shadowRadius: 28,
    elevation: 18,
  },
  modalTablet: {
    maxWidth: 520,
  },
  header: {
    height: 66,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 6,
  },
  cancelButton: {
    flex: 0.82,
    height: 54,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  updateButton: {
    flex: 1.18,
    height: 54,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    color: COLORS.textPrimary,
    fontSize: 20,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
  updateText: {
    color: COLORS.black,
    fontSize: 20,
    fontFamily: 'Manrope',
    fontWeight: '800',
  },
});
