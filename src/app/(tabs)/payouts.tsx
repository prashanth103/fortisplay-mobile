import Screen from '@/components/layout/Screen';
import { COLORS } from '@/theme/colors';
import Input from '@/components/common/Input';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ticketData = {
  '8266150525': {
    status: 'WON',
    badgeColor: '#D9F4E0',
    badgeTextColor: '#2B7A37',
    note: 'Payout due',
    payout: 75,
    ticketType: 'KB2 · WIN',
    option: 'EXACT',
    ticketNumber: '8266150525',
    date: '21-06-2026, 4:32 PM',
    betAmount: 5,
    iconText: 'YW',
    iconColor: '#F8D44E',
    subtitle: 'Yellow',
    noteText: 'Payout due',
    noteBackground: '#D9F4E0',
    noteColor: '#2B7A37',
  },
  '8259181740': {
    status: 'LOST',
    badgeColor: '#F2F2F2',
    badgeTextColor: '#4F4F4F',
    note: 'No payout — this ticket did not win.',
    payout: 0,
    ticketType: 'KB1 · WIN',
    option: 'EXACT',
    ticketNumber: '8259181740',
    date: '21-06-2026, 4:05 PM',
    betAmount: 5,
    iconText: 'LG',
    iconColor: '#5FD27C',
    subtitle: 'Light Green',
    noteBackground: '#F2F2F2',
    noteColor: '#4F4F4F',
  },
  '8266144213': {
    status: 'LOST',
    badgeColor: '#F2F2F2',
    badgeTextColor: '#4F4F4F',
    note: 'No payout — this ticket did not win.',
    payout: 0,
    ticketType: 'KB1 · FORECAST',
    option: 'ANY',
    ticketNumber: '8266144213',
    date: '21-06-2026, 4:18 PM',
    betAmount: 10,
    iconText: 'SB',
    iconColor: '#6BB9FF',
    subtitle: 'Light Blue',
    noteBackground: '#F2F2F2',
    noteColor: '#4F4F4F',
  },
  '824290817': {
    status: 'PENDING',
    badgeColor: '#FEF4CC',
    badgeTextColor: '#B08B24',
    note: 'Race not finished — payout pending result.',
    payout: 0,
    ticketType: 'KB3 · WIN',
    option: 'EXACT',
    ticketNumber: '824290817',
    date: '21-06-2026, 3:25 PM',
    betAmount: 5,
    iconText: 'RD',
    iconColor: '#F15151',
    subtitle: 'Red',
    noteBackground: '#FEF4CC',
    noteColor: '#B08B24',
  },
};

type TicketResult = typeof ticketData[keyof typeof ticketData];

export default function PayoutsScreen() {
  const { ticket } = useLocalSearchParams();
  const ticketQuery = Array.isArray(ticket) ? ticket[0] : ticket ?? '';
  const [ticketNumber, setTicketNumber] = useState('');
  const [result, setResult] = useState<TicketResult | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!ticketQuery) return;
    setTicketNumber(ticketQuery);
    const ticketResult = ticketData[ticketQuery.trim() as keyof typeof ticketData];
    if (ticketResult) {
      setResult(ticketResult);
      setError('');
    } else {
      setResult(null);
      setError('Ticket not found. Check the number and try again.');
    }
  }, [ticketQuery]);

  const handleVerify = () => {
    const ticket = ticketData[ticketNumber.trim() as keyof typeof ticketData];
    if (ticket) {
      setResult(ticket);
      setError('');
    } else {
      setResult(null);
      setError('Ticket not found. Check the number and try again.');
    }
  };

  const handleReset = () => {
    setTicketNumber('');
    setResult(null);
    setError('');
  };

  return (
    <Screen backgroundColor={COLORS.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Payouts</Text>
          <Text style={styles.subtitle}>Scan or enter a ticket to verify</Text>
        </View>

        {!result ? (
          <>
            <View style={styles.scanFrame}>
              <View style={styles.scanCornerTopLeft} />
              <View style={styles.scanCornerTopRight} />
              <View style={styles.scanCornerBottomLeft} />
              <View style={styles.scanCornerBottomRight} />
            </View>

            <TouchableOpacity style={styles.scanButton} activeOpacity={0.8} onPress={handleReset}>
              <MaterialIcons name="qr-code-scanner" size={20} color={COLORS.black} />
              <Text style={styles.scanButtonText}>Scan Ticket</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR ENTER TICKET NUMBER</Text>

            <View style={styles.verifyRow}>
              <Input
                wrapperStyle={styles.inputWrapper}
                inputContainerStyle={styles.inputContainer}
                leftIcon={<MaterialIcons name="receipt-long" size={18} color={COLORS.textSecondary} />}
                placeholder="e.g. 8266150525"
                placeholderColor={COLORS.textSecondary}
                textColor={COLORS.white}
                value={ticketNumber}
                onChangeText={setTicketNumber}
                keyboardType="number-pad"
              />
              <TouchableOpacity style={styles.verifyButton} activeOpacity={0.8} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </TouchableOpacity>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </>
        ) : null}

        {result ? (
          <View style={styles.ticketCard}>
            <View style={styles.ticketHeader}>
              <Text style={styles.ticketHeaderText}>Ticket Details</Text>
              <View style={[styles.statusBadge, { backgroundColor: result.badgeColor }]}>
                <Text style={[styles.statusBadgeText, { color: result.badgeTextColor }]}>{result.status}</Text>
              </View>
            </View>

            <View style={styles.ticketBody}>
              <View style={[styles.ticketIcon, { backgroundColor: result.iconColor }]}>
                <Text style={styles.ticketIconText}>{result.iconText}</Text>
              </View>
              <View style={styles.ticketInfo}>
                <View style={styles.ticketTitleRow}>
                  <Text style={styles.ticketTitle}>{result.ticketType}</Text>
                  <View style={styles.itemBadge}>
                    <Text style={styles.itemBadgeText}>{result.option}</Text>
                  </View>
                </View>
                <Text style={styles.ticketSubtitle}>{result.subtitle}</Text>
              </View>
            </View>

            <View style={styles.ticketDetailsRow}>
              <Text style={styles.ticketLabel}>Ticket</Text>
              <Text style={styles.ticketValue}>No. {result.ticketNumber}</Text>
            </View>
            <View style={styles.ticketDetailsRow}>
              <Text style={styles.ticketLabel}>Date</Text>
              <Text style={styles.ticketValue}>{result.date}</Text>
            </View>
            <View style={styles.ticketDetailsRow}>
              <Text style={styles.ticketLabel}>Bet Amount</Text>
              <Text style={styles.ticketValue}>₱{result.betAmount}</Text>
            </View>

            <View style={[styles.resultBox, { backgroundColor: result.noteBackground }]}>
              <Text style={[styles.resultText, { color: result.noteColor }]}>{result.note}</Text>
              {result.status === 'WON' ? (
                <Text style={[styles.payoutAmount, { color: '#2B7A37' }]}>₱{result.payout}</Text>
              ) : null}
            </View>
          </View>
        ) : null}

        {result ? (
          <TouchableOpacity style={styles.scanAnotherButton} activeOpacity={0.8} onPress={handleReset}>
            <Text style={styles.scanAnotherText}>Scan Another</Text>
          </TouchableOpacity>
        ) : null}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: SPACING.huge,
  },
  heading: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    fontSize: 14,
  },
  scanFrame: {
    height: 240,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.surfaceElevated,
    marginBottom: SPACING.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanCornerTopLeft: {
    position: 'absolute',
    top: SPACING.lg,
    left: SPACING.lg,
    width: 24,
    height: 24,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: COLORS.primary,
    borderTopLeftRadius: 6,
  },
  scanCornerTopRight: {
    position: 'absolute',
    top: SPACING.lg,
    right: SPACING.lg,
    width: 24,
    height: 24,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.primary,
    borderTopRightRadius: 6,
  },
  scanCornerBottomLeft: {
    position: 'absolute',
    bottom: SPACING.lg,
    left: SPACING.lg,
    width: 24,
    height: 24,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: COLORS.primary,
    borderBottomLeftRadius: 6,
  },
  scanCornerBottomRight: {
    position: 'absolute',
    bottom: SPACING.lg,
    right: SPACING.lg,
    width: 24,
    height: 24,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.primary,
    borderBottomRightRadius: 6,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.xl,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.md,
  },
  scanButtonText: {
    color: COLORS.black,
    fontWeight: '800',
    marginLeft: SPACING.sm,
    fontSize: 14,
  },
  orText: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: SPACING.md,
  },
  verifyRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  inputWrapper: {
    flex: 1,
    marginBottom: 0,
  },
  inputContainer: {
    borderRadius: RADIUS.lg,
    borderColor: COLORS.surface,
  },
  verifyButton: {
    minWidth: 88,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
  },
  verifyButtonText: {
    color: COLORS.black,
    fontWeight: '800',
    fontSize: 14,
  },
  errorText: {
    color: COLORS.errorText,
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
  ticketCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    marginTop: SPACING.lg,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  ticketHeaderText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '800',
  },
  statusBadge: {
    borderRadius: RADIUS.xxl,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '800',
  },
  ticketBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  ticketIcon: {
    width: 54,
    height: 54,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.lg,
  },
  ticketIconText: {
    color: COLORS.black,
    fontWeight: '800',
  },
  ticketInfo: {
    flex: 1,
  },
  ticketTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  ticketTitle: {
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
  },
  ticketSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  itemBadge: {
    borderRadius: 999,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    backgroundColor: '#FAE5B2',
  },
  itemBadgeText: {
    color: COLORS.black,
    fontSize: 10,
    fontWeight: '700',
  },
  ticketDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  ticketLabel: {
    color: '#7F7F7F',
    fontSize: 13,
  },
  ticketValue: {
    color: COLORS.black,
    fontSize: 13,
    fontWeight: '700',
  },
  resultBox: {
    marginTop: SPACING.lg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
  },
  payoutAmount: {
    fontSize: 20,
    fontWeight: '900',
  },
  scanAnotherButton: {
    marginTop: SPACING.lg,
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
  scanAnotherText: {
    color: COLORS.white,
    fontWeight: '800',
  },
});
