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

                <AppText fontFamily="ManropeBold" color={COLORS.black} style={{ marginTop: 8 }}>
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
    paddingTop: 18,
  },

  badge: {
    backgroundColor: COLORS.ticketBackground,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },

  badgeText: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  semiCircleLeft: {
    width: 13,
    height: 26,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: COLORS.background,
    marginRight: 6
  },

  semiCircleRight: {
    width: 13,
    height: 26,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: COLORS.background,
    marginLeft: 6
  },

  line: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: COLORS.textSecondary,
    borderStyle: 'dashed',
  },

  infoRow: {
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
    width: 36,
    height: 36,
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
    paddingVertical: 4,
  },

  amount: {
    color: COLORS.ticketGold,
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
  },

  confirm: {
    flex: 1,
    height: 54,
    borderRadius: 12,
  },



});
