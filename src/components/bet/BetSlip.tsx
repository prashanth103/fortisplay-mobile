import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Input from '@/components/common/Input';
import { COLORS } from '@/theme/colors';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';

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

          <Text style={styles.headerTitle}>
            Bet Slip
          </Text>

          <View style={styles.count}>
            <Text style={styles.countText}>1</Text>
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

        <Text style={styles.pool}>
          WIN · FINISH 1ST
        </Text>

        <View style={styles.row}>

          <View style={styles.runner}>

            <View style={styles.circle}>
              <Text style={styles.code}>
                {runnerCode}
              </Text>
            </View>

            <Text style={styles.runnerName}>
              {runnerName}
            </Text>

          </View>

          <Input
            wrapperStyle={styles.amountBox}
            inputContainerStyle={styles.amountInputContainer}
            leftContent={(
              <Text style={styles.currency}>
                ₱
              </Text>
            )}
            value={amount}
            keyboardType="numeric"
            onChangeText={onAmountChange}
            textColor={COLORS.black}
            style={styles.input}
          />

        </View>

        <Pressable
          style={styles.button}
          onPress={onPlaceBet}
        >
          <Text style={styles.buttonText}>
            Place Bet · ₱{amount}
          </Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderRadius: 12,
    padding: 16,
  },

  pool: {
    color: '#B27D00',
    fontWeight: '700',
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
