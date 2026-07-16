import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { Modal, Pressable, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import { TYPOGRAPHY } from '@/theme/typography';
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

              <AppText variant="h4" fontFamily="ManropeExtraBold" color={COLORS.black}>
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
                <AppText fontFamily="ManropeBold" color={COLORS.primary}>
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

                <AppText fontSize={28} fontFamily="ManropeExtraBold" color={COLORS.ticketGold} style={{ textAlign: "center" }}>
                  WIN
                </AppText>

                <AppText fontFamily="ManropeRegular" color={COLORS.textMuted} style={{ textAlign: "center" }}>
                  POOL
                </AppText>

              </View>

              <View style={styles.runner}>

                <View style={styles.circle}>

                  <View style={styles.innerCircle}>

                    <AppText fontFamily="ManropeBold" color={COLORS.black}>
                      {runnerCode}
                    </AppText>

                  </View>

                </View>

                <AppText fontFamily="ManropeBold" color={COLORS.black} style={{ marginTop: SPACING.sm }}>
                  {runnerName}
                </AppText>

              </View>

              <View>

                <AppText fontSize={28} fontFamily="ManropeExtraBold" color={COLORS.black} style={{ textAlign: "center" }}>
                  EXACT
                </AppText>

                <AppText fontFamily="ManropeRegular" color={COLORS.textMuted} style={{ textAlign: "center" }}>
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

              <AppText variant="h3" fontFamily="ManropeBold" color={COLORS.black}>
                TOTAL AMOUNT
              </AppText>

              <View style={styles.amountBox}>
                <AppText variant="h3" fontFamily="ManropeBold" color={COLORS.ticketGold}>
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
    overflow: 'hidden',
  },

  header: {
    height: 64,
    paddingHorizontal: SPACING.xl,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ticketBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.black,
  },

  qrContainer: {
    alignItems: 'center',
    paddingTop: SPACING.xl,
  },

  badge: {
    backgroundColor: COLORS.ticketBackground,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },

  badgeText: {
    color: COLORS.primary,
    fontWeight: '700',
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
    backgroundColor: COLORS.background,
    marginRight: SPACING.sm
  },

  semiCircleRight: {
    width: 13,
    height: 26,
    borderTopLeftRadius: RADIUS.lg,
    borderBottomLeftRadius: RADIUS.lg,
    backgroundColor: COLORS.background,
    marginLeft: SPACING.sm
  },

  line: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.textSecondary,
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
    fontWeight: '700',
  },

  runnerName: {
    marginTop: SPACING.sm,
    fontWeight: '700',
    color: COLORS.black,
  },

  winLabel: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.ticketGold,
    textAlign: 'center',
  },

  exactLabel: {
    fontSize: 28,
    fontWeight: '800',
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
    fontWeight: '700',
    fontSize: 22,
    color: COLORS.black,
  },

  amountBox: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xs,
  },

  amount: {
    color: COLORS.ticketGold,
    fontWeight: '700',
    fontSize: 22,
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
