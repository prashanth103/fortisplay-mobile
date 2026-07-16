import { BORDERS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY } from '@/theme';
import AppText from '@/components/common/AppText';

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { useThemeColors } from "@/hooks/useThemeColors";

import * as React from "react";

interface Props {
  visible: boolean;
  runnerCode: string;
  runnerName: string;
  amount: string;
  onAmountChange: (value: string) => void;
  onClose: () => void;
  onPlaceBet: () => void;
}

export default function BetSlip({
  visible,
  runnerCode,
  runnerName,
  amount,
  onAmountChange,
  onClose,
  onPlaceBet,
}: Props) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  if (!visible) return null;

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.headerLeft}>

          <View style={styles.iconBox}>
            <MaterialIcons
              name="receipt-long"
              size={20}
              color={COLORS.primary}
            />
          </View>

          <AppText variant="h4" fontFamily="ManropeBold" color={COLORS.primary} style={{ marginLeft: SPACING.sm }}>
            Bet Slip
          </AppText>

          <View style={styles.count}>
            <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>1</AppText>
          </View>

        </View>

        <Pressable onPress={onClose}>
          <MaterialIcons
            name="close"
            size={22}
            color={COLORS.textSecondary}
          />
        </Pressable>

      </View>

      <View style={styles.content}>

        <View style={styles.topRow}>

          <View style={styles.leftBlock}>
            <AppText fontFamily="ManropeBold" color={COLORS.ticketGold} style={{ marginBottom: SPACING.md }}>
              WIN · FINISH 1ST
            </AppText>

            <View style={styles.runner}>

              <View style={styles.circle}>
                <AppText fontFamily="ManropeBold" color={COLORS.black}>
                  {runnerCode}
                </AppText>
              </View>

              <AppText fontSize={16} fontFamily="ManropeBold" color={COLORS.black} style={{ marginLeft: SPACING.md }}>
                {runnerName}
              </AppText>

            </View>
          </View>

          <View style={styles.rightBlock}>
            <AppText fontFamily="ManropeBold" color={COLORS.textSecondary} style={{ marginBottom: SPACING.sm }}>STAKE</AppText>

            <Input
              wrapperStyle={styles.amountBox}
              inputContainerStyle={styles.amountInputContainer}
              leftContent={(
                <AppText variant="h3" fontFamily="ManropeBold" color={COLORS.black}>
                  ₱
                </AppText>
              )}
              value={amount}
              keyboardType="numeric"
              onChangeText={onAmountChange}
              textColor={COLORS.black}
              style={styles.input}
            />
          </View>

        </View>

        <Button
          title={`Place Bet · ₱${amount}`}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onPlaceBet}
        />

      </View>

    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.lg,
    marginTop: SPACING.lg,
    ...SHADOWS.betSlip,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    backgroundColor: COLORS.badgeBackgroundDark,
    height: 36,
    width: 36,
    borderRadius: RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
    marginLeft: SPACING.sm,
  },

  count: {
    marginLeft: SPACING.sm,
    width: 22,
    height: 22,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  countText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 12,
  },

  content: {
    marginTop: SPACING.xl,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },

  pool: {
    color: COLORS.ticketGold,
    fontWeight: '700',
    marginBottom: SPACING.md,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftBlock: {
    flex: 1,
    paddingRight: SPACING.md,
  },

  rightBlock: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  stakeLabel: {
    color: COLORS.textSecondary,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },

  runner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  code: {
    color: COLORS.black,
    fontWeight: '700',
  },

  runnerName: {
    marginLeft: SPACING.md,
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.body.fontSize,
  },

  amountBox: {
    width: 105,
    marginBottom: SPACING.none,
  },

  amountInputContainer: {
    height: 46,
    borderWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm,
  },

  currency: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 22,
  },

  input: {
    fontWeight: '700',
    fontSize: 22,
  },

  button: {
    marginTop: SPACING.xl,
    height: 52,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 18,
  },

});
