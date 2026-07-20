import { BORDERS, RADIUS, SPACING, TYPOGRAPHY } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';

import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

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
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
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

              <AppText variant="h5" color={COLORS.black}>
                Confirm Bet
              </AppText>

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
                <AppText color={COLORS.primary}>
                  KB3 · RACE 8
                </AppText>
              </View>

              <MaterialIcons
                name="qr-code-2"
                size={180}
                color={COLORS.black}
              />

            </View>

            <View style={styles.lineContainer}>
              <View style={styles.semiCircleLeft} />
              <View style={styles.line} />
              <View style={styles.semiCircleRight} />
            </View>

            {/* Info */}

            <View style={styles.infoRow}>

              <View>

                <AppText color={COLORS.primary} style={{ textAlign: "center" }}>
                  WIN
                </AppText>

                <AppText color={COLORS.textMuted} style={{ textAlign: "center" }}>
                  POOL
                </AppText>

              </View>

              <View style={styles.runner}>

                <View style={styles.circle}>

                  <View style={styles.innerCircle}>

                    <AppText color={COLORS.black}>
                      {runnerCode}
                    </AppText>

                  </View>

                </View>

                <AppText color={COLORS.black} style={{ marginTop: SPACING.sm }}>
                  {runnerName}
                </AppText>

              </View>

              <View>

                <AppText color={COLORS.black} style={{ textAlign: "center" }}>
                  EXACT
                </AppText>

                <AppText color={COLORS.textMuted} style={{ textAlign: "center" }}>
                  ORDER
                </AppText>

              </View>

            </View>

            <View style={styles.lineContainer}>
              <View style={styles.semiCircleLeft} />
              <View style={styles.line} />
              <View style={styles.semiCircleRight} />
            </View>

            <View style={styles.amountRow}>

              <AppText variant="h5" color={COLORS.black}>
                TOTAL AMOUNT
              </AppText>

              <View style={styles.amountBox}>
                <AppText variant="h3" color={COLORS.primary}>
                  ₱{amount}
                </AppText>
              </View>

            </View>

          </View>

          {/* Buttons outside white card */}
          <View style={styles.footer}>

            <Button
              title="Cancel"
              variant="cancel"
              style={styles.cancel}
              onPress={onClose}
            />

            <Button
              title="Place Bet"
              style={styles.confirm}
              onPress={onConfirm}
            />

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
    backgroundColor: COLORS.overlay,
    padding: SPACING.xl,
  },

  container: {
    width: '100%',
    backgroundColor: COLORS.transparent,
    borderRadius: RADIUS.xl,
    overflow: 'visible',
  },

  card: {
    width: '100%',
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.white,
    overflow: 'visible',
  },

  header: {
    height: 64,
    paddingHorizontal: SPACING.xl,
    borderBottomWidth: BORDERS.ultraThin,
    borderBottomColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {

    color: COLORS.black,
  },

  qrContainer: {
    alignItems: 'center',
    paddingTop: SPACING.xl,
  },

  badge: {
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },

  badgeText: {
    color: COLORS.primary,

  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.md,
  },

  semiCircleLeft: {
    width: 13,
    height: 26,
    borderTopRightRadius: RADIUS.lg,
    borderBottomRightRadius: RADIUS.lg,
    backgroundColor: COLORS.bg,
    marginRight: SPACING.sm
  },

  semiCircleRight: {
    width: 13,
    height: 26,
    borderTopLeftRadius: RADIUS.lg,
    borderBottomLeftRadius: RADIUS.lg,
    backgroundColor: COLORS.bg,
    marginLeft: SPACING.sm
  },

  line: {
    flex: 1,
    borderTopWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.textMuted,
    borderStyle: 'dashed',
  },

  infoRow: {
    paddingHorizontal: SPACING.xxl,
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
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  code: {
    color: COLORS.black,

  },

  runnerName: {
    marginTop: SPACING.sm,

    color: COLORS.black,
  },

  winLabel: {

    color: COLORS.primary,
    textAlign: 'center',
  },

  exactLabel: {

    color: COLORS.black,
    textAlign: 'center',
  },

  subLabel: {
    color: COLORS.textMuted,
    textAlign: 'center',
  },

  amountRow: {
    paddingHorizontal: SPACING.xxl,
    paddingBottom: SPACING.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  total: {

    color: COLORS.black,
  },

  amountBox: {
    borderWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xs,
  },

  amount: {
    color: COLORS.primary,

  },

  footer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    gap: SPACING.lg,
  },

  cancel: {
    flex: 1,
    height: 54,
    borderRadius: RADIUS.sm,
  },

  confirm: {
    flex: 1,
    height: 54,
    borderRadius: RADIUS.sm,
  },

});
