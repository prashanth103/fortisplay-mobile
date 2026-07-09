import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '@/components/common/Button';
import { COLORS } from '@/theme/colors';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  visible: boolean;
  runnerCode: string;
  runnerName: string;
  amount: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmBetModal({
  visible,
  runnerCode,
  runnerName,
  amount,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>

        <View style={styles.container}>

          <View style={styles.card}>

            {/* Header */}

            <View style={styles.header}>

              <Text style={styles.headerTitle}>
                Confirm Bet
              </Text>

              <Pressable onPress={onClose}>
                <MaterialIcons
                  name="close"
                  size={22}
                  color={COLORS.textMuted}
                />
              </Pressable>

            </View>

            {/* QR */}

            <View style={styles.qrContainer}>

              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  KB3 · RACE 8
                </Text>
              </View>

              <View style={styles.qr}>
                <MaterialIcons
                  name="qr-code-2"
                  size={150}
                  color={COLORS.black}
                />
              </View>

            </View>

            <View style={styles.separator} />

            {/* Info */}

            <View style={styles.infoRow}>

              <View>

                <Text style={styles.label}>
                  WIN
                </Text>

                <Text style={styles.subLabel}>
                  POOL
                </Text>

              </View>

              <View style={styles.runner}>

                <View style={styles.circle}>

                  <View style={styles.innerCircle}>

                    <Text style={styles.code}>
                      {runnerCode}
                    </Text>

                  </View>

                </View>

                <Text style={styles.runnerName}>
                  {runnerName}
                </Text>

              </View>

              <View>

                <Text style={styles.label}>
                  EXACT
                </Text>

                <Text style={styles.subLabel}>
                  ORDER
                </Text>

              </View>

            </View>

            <View style={styles.separator} />

            <View style={styles.amountRow}>

              <Text style={styles.total}>
                TOTAL AMOUNT
              </Text>

              <View style={styles.amountBox}>
                <Text style={styles.amount}>
                  ₱{amount}
                </Text>
              </View>

            </View>

          </View>

          {/* Buttons outside white card */}
          <View style={styles.footer}>

            <Button
              title="Cancel"
              variant="outline"
              style={styles.cancel}
              textStyle={styles.cancelText}
              onPress={onClose}
            />

            <Button
              title="Place Bet"
              style={styles.confirm}
              textStyle={styles.confirmText}
              onPress={onConfirm}
            />

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
    backgroundColor: COLORS.overlay,
    padding: 20,
  },

  container: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 20,
    overflow: 'visible',
  },

  card: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.black,
  },

  qrContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },

  badge: {
    backgroundColor: '#1F1F1F',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  badgeText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  qr: {
    marginTop: 18,
  },

  separator: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    borderStyle: 'dashed',
    marginVertical: 18,
  },

  infoRow: {
    marginTop: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  runner: {
    alignItems: 'center',
  },

  circle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  code: {
    color: COLORS.black,
    fontWeight: '700',
  },

  runnerName: {
    marginTop: 8,
    fontWeight: '700',
    color: COLORS.black,
  },

  label: {
    fontSize: 28,
    fontWeight: '700',
    color: '#B27D00',
    textAlign: 'center',
  },

  subLabel: {
    color: COLORS.textMuted,
    textAlign: 'center',
  },

  amountRow: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  total: {
    fontWeight: '700',
    fontSize: 22,
    color: COLORS.black,
  },

  amountBox: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  amount: {
    color: '#B27D00',
    fontWeight: '700',
    fontSize: 22,
  },

  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 18,
    gap: 16,
  },

  cancel: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  confirm: {
    flex: 1,
    height: 54,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  confirmText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

});
