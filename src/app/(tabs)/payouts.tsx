import AppText from '@/components/common/AppText';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Screen from '@/components/layout/Screen';
import { useThemeColors } from "@/hooks/useThemeColors";
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';



export default function PayoutsScreen() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const ticketData = React.useMemo(() => ({
    '8266150525': {
      status: 'WON',
      badgeColor: COLORS.successBackground,
      badgeTextColor: COLORS.successText,
      note: 'Payout due',
      payout: 75,
      ticketType: 'KB2 · WIN',
      option: 'EXACT',
      ticketNumber: '8266150525',
      date: '21-06-2026, 4:32 PM',
      betAmount: 5,
      iconText: 'YW',
      iconColor: COLORS.avatarYellow,
      subtitle: 'Yellow',
      noteText: 'Payout due',
      noteBackground: COLORS.successBackground,
      noteColor: COLORS.successText,
    },
    '8259181740': {
      status: 'LOST',
      badgeColor: COLORS.neutralBackground,
      badgeTextColor: COLORS.neutralText,
      note: 'No payout — this ticket did not win.',
      payout: 0,
      ticketType: 'KB1 · WIN',
      option: 'EXACT',
      ticketNumber: '8259181740',
      date: '21-06-2026, 4:05 PM',
      betAmount: 5,
      iconText: 'LG',
      iconColor: COLORS.avatarGreenLight,
      subtitle: 'Light Green',
      noteBackground: COLORS.neutralBackground,
      noteColor: COLORS.neutralText,
    },
    '8266144213': {
      status: 'LOST',
      badgeColor: COLORS.neutralBackground,
      badgeTextColor: COLORS.neutralText,
      note: 'No payout — this ticket did not win.',
      payout: 0,
      ticketType: 'KB1 · FORECAST',
      option: 'ANY',
      ticketNumber: '8266144213',
      date: '21-06-2026, 4:18 PM',
      betAmount: 10,
      iconText: 'SB',
      iconColor: COLORS.avatarBlue,
      subtitle: 'Light Blue',
      noteBackground: COLORS.neutralBackground,
      noteColor: COLORS.neutralText,
    },
    '824290817': {
      status: 'PENDING',
      badgeColor: COLORS.warningBackground,
      badgeTextColor: COLORS.warningText,
      note: 'Race not finished — payout pending result.',
      payout: 0,
      ticketType: 'KB3 · WIN',
      option: 'EXACT',
      ticketNumber: '824290817',
      date: '21-06-2026, 3:25 PM',
      betAmount: 5,
      iconText: 'RD',
      iconColor: COLORS.avatarRed,
      subtitle: 'Red',
      noteBackground: COLORS.warningBackground,
      noteColor: COLORS.warningText,
    },
  }), [COLORS]);

  type TicketResult = typeof ticketData[keyof typeof ticketData];
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
          <AppText variant='h1' color={COLORS.textPrimary}>Payouts</AppText>
          <AppText variant="p2" style={{ marginTop: 8 }}>Scan or enter a ticket to verify</AppText>
        </View>

        {!result ? (
          <>
            <View style={styles.scanFrame}>
              <View style={styles.scanCornerTopLeft} />
              <View style={styles.scanCornerTopRight} />
              <View style={styles.scanCornerBottomLeft} />
              <View style={styles.scanCornerBottomRight} />
            </View>

            <Button
              title="Scan Ticket"
              style={styles.scanButton}
              textStyle={styles.scanButtonText}
              activeOpacity={0.8}
              onPress={handleReset}
              leftIcon={<MaterialIcons name="qr-code-scanner" size={20} color={COLORS.black} />}
            />

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.textSecondary} style={{ textAlign: "center", letterSpacing: 1, marginHorizontal: 12 }}>OR ENTER TICKET NUMBER</AppText>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.verifyRow}>
              <Input
                wrapperStyle={styles.inputWrapper}
                inputContainerStyle={styles.inputContainer}
                leftIcon={<MaterialIcons name="receipt-long" size={18} color={COLORS.textSecondary} />}
                placeholder="e.g. 8266150525"
                placeholderColor={COLORS.textMuted}
                textColor={COLORS.textPrimary}
                value={ticketNumber}
                onChangeText={setTicketNumber}
                keyboardType="number-pad"
              />
              <Button
                title="Verify"
                variant="verify"
                style={styles.verifyButton}
                activeOpacity={0.8}
                onPress={handleVerify}
              />
            </View>

            {error ? <AppText variant="p2" color={COLORS.danger} style={{ marginTop: 8, textAlign: "center" }}>{error}</AppText> : null}
          </>
        ) : null}

        {result ? (
          <View style={styles.ticketCard}>
            <View style={styles.ticketHeader}>
              <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.black}>Ticket Details</AppText>
              <View style={[styles.statusBadge, { backgroundColor: result.badgeColor }]}>
                <AppText variant="p3" fontFamily="ManropeExtraBold" color={result.badgeTextColor}>{result.status}</AppText>
              </View>
            </View>

            <View style={styles.ticketBody}>
              <View style={[styles.ticketIcon, { backgroundColor: result.iconColor }]}>
                <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.black}>{result.iconText}</AppText>
              </View>
              <View style={styles.ticketInfo}>
                <View style={styles.ticketTitleRow}>
                  <AppText variant="p2" fontFamily="ManropeExtraBold" color={COLORS.black} style={{ flex: 1 }}>{result.ticketType}</AppText>
                  <View style={styles.itemBadge}>
                    <AppText fontSize={10} fontFamily="ManropeBold" color={COLORS.black}>{result.option}</AppText>
                  </View>
                </View>
                <AppText variant="p3" color={COLORS.textSecondary}>{result.subtitle}</AppText>
              </View>
            </View>

            <View style={styles.ticketDetailsRow}>
              <AppText variant="p3" color={COLORS.tableHeader}>Ticket</AppText>
              <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>No. {result.ticketNumber}</AppText>
            </View>
            <View style={styles.ticketDetailsRow}>
              <AppText variant="p3" color={COLORS.tableHeader}>Date</AppText>
              <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>{result.date}</AppText>
            </View>
            <View style={styles.ticketDetailsRow}>
              <AppText variant="p3" color={COLORS.tableHeader}>Bet Amount</AppText>
              <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>₱{result.betAmount}</AppText>
            </View>

            <View style={[styles.resultBox, { backgroundColor: result.noteBackground }]}>
              <AppText variant="p3" fontFamily="ManropeBold" color={result.noteColor} style={{ flex: 1 }}>{result.note}</AppText>
              {result.status === 'WON' ? (
                <AppText variant="h4" fontFamily="ManropeExtraBold" color={COLORS.successText}>₱{result.payout}</AppText>
              ) : null}
            </View>
          </View>
        ) : null}

        {result ? (
          <Button
            title="Scan Another"
            variant="scan"
            style={styles.scanAnotherButton}
            activeOpacity={0.8}
            onPress={handleReset}
          />
        ) : null}
      </ScrollView>
    </Screen>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    paddingBottom: SPACING.huge,
  },
  heading: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    fontSize: 14,
  },
  scanFrame: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.surfaceElevated,
    marginBottom: SPACING.lg,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    width: 190,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    paddingVertical: 14,
    marginBottom: SPACING.lg,
  },
  scanButtonText: {
    color: COLORS.black,
    fontWeight: '800',
    marginLeft: SPACING.sm,
    fontSize: 14,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.borderMuted,
  },

  orText: {
    color: COLORS.textSecondary,
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: '700',
    marginHorizontal: 12,
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
    height: 48,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surfaceElevated,
    borderColor: COLORS.border,
  },
  verifyButton: {
    minWidth: 88,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
  },


  errorText: {
    color: COLORS.danger,
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
    backgroundColor: COLORS.highlightBackground,
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
    color: COLORS.tableHeader,
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
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },

});
