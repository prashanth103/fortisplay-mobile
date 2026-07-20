import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SHADOWS, SPACING } from '@/theme';

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

          <View style={styles.receiptIcon}>
            <MaterialIcons
              name="receipt-long"
              size={14}
              color={COLORS.primary}
            />
          </View>

          <AppText variant="h6" color={COLORS.primary} style={{ marginLeft: SPACING.sm }}>
            Bet Slip
          </AppText>

          <View style={styles.count}>
            <AppText variant="p3" color={COLORS.black}>1</AppText>
          </View>

        </View>

        <Pressable style={styles.closeIcon} onPress={onClose}>
          <MaterialIcons
            name="close"
            size={16}
            color={COLORS.textMuted}
          />
        </Pressable>

      </View>

      <View style={styles.content}>

        <View style={styles.topRow}>

          <View style={styles.leftBlock}>
            <AppText variant='h6' color={COLORS.primary} style={{ marginBottom: SPACING.md }}>
              WIN · FINISH 1ST
            </AppText>

            <View style={styles.runner}>

              <View style={styles.circle}>
                <AppText color={COLORS.black}>
                  {runnerCode}
                </AppText>
              </View>

              <AppText color={COLORS.black} style={{ marginLeft: SPACING.md }}>
                {runnerName}
              </AppText>

            </View>
          </View>

          <View style={styles.rightBlock}>
            <AppText color={COLORS.textMuted} style={{ marginBottom: SPACING.sm }}>STAKE</AppText>

            <Input
              wrapperStyle={styles.amountBox}
              inputContainerStyle={styles.amountInputContainer}
              leftContent={(
                <AppText variant="h3" color={COLORS.black}>
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
    backgroundColor: COLORS.bgSurface,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.md,
    marginTop: SPACING.md,
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

  receiptIcon: {
    backgroundColor: COLORS.primaryMuted,
    padding: SPACING.sm,
    borderRadius: RADIUS.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },

  count: {
    marginLeft: SPACING.sm,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeIcon: {
    backgroundColor: COLORS.bgMuted,
    padding: SPACING.sm,
    borderRadius: RADIUS.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    marginTop: SPACING.md,
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
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
    color: COLORS.textMuted,

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

  },

  runnerName: {
    marginLeft: SPACING.md,
    color: COLORS.black,

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

  },

  input: {

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

  },

});
