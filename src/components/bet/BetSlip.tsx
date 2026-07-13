import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { Pressable, StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';
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

          <AppText variant="h4" fontFamily="ManropeBold" color={COLORS.primary} style={{ marginLeft: 8 }}>
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
            <AppText fontFamily="ManropeBold" color="#B27D00" style={{ marginBottom: 12 }}>
              WIN · FINISH 1ST
            </AppText>

            <View style={styles.runner}>

              <View style={styles.circle}>
                <AppText fontFamily="ManropeBold" color={COLORS.black}>
                  {runnerCode}
                </AppText>
              </View>

              <AppText fontSize={16} fontFamily="ManropeBold" color={COLORS.black} style={{ marginLeft: 12 }}>
                {runnerName}
              </AppText>

            </View>
          </View>

          <View style={styles.rightBlock}>
            <AppText fontFamily="ManropeBold" color={COLORS.textSecondary} style={{ marginBottom: 6 }}>STAKE</AppText>

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
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.lg,
    marginTop: 14,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 20,
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
    backgroundColor: '#3B3323',
    height: 36,
    width: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 8,
  },

  count: {
    marginLeft: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
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
    marginTop: 20,
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: SPACING.lg,
  },

  pool: {
    color: '#B27D00',
    fontWeight: '700',
    marginBottom: 12,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftBlock: {
    flex: 1,
    paddingRight: 12,
  },

  rightBlock: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  stakeLabel: {
    color: COLORS.textSecondary,
    fontWeight: '700',
    marginBottom: 6,
  },

  runner: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  code: {
    color: COLORS.black,
    fontWeight: '700',
  },

  runnerName: {
    marginLeft: 12,
    color: COLORS.black,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.body.size,
  },

  amountBox: {
    width: 105,
    marginBottom: 0,
  },

  amountInputContainer: {
    height: 46,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    gap: 6,
  },

  currency: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 22,
  },

  input: {
    fontWeight: '700',
    fontSize: 22,
    padding: 0,
  },

  button: {
    marginTop: 18,
    height: 52,
    borderRadius: 12,
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
