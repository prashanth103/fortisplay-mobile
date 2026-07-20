import AppText from '@/components/common/AppText';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TicketCard, { TicketCardData } from '@/components/common/TicketCard';
import Screen from '@/components/layout/Screen';
import { PAYOUTS_DATA } from '@/data/dummyData';
import { useThemeColors } from '@/hooks/useThemeColors';
import { BORDERS, OPACITY, RADIUS, SPACING } from '@/theme';

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function PayoutsScreen() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const ticketData: Record<string, TicketCardData> = useMemo(
    () => Object.fromEntries(
      Object.entries(PAYOUTS_DATA).map(([key, item]) => [
        key,
        { ...item, iconColor: COLORS[item.iconColorKey] as string },
      ])
    ),
    [COLORS]
  );

  const { ticket } = useLocalSearchParams();
  const ticketQuery = Array.isArray(ticket) ? ticket[0] : ticket ?? '';
  const [ticketNumber, setTicketNumber] = useState('');
  const [result, setResult] = useState<TicketCardData | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!ticketQuery) return;
    setTicketNumber(ticketQuery);
    const found = ticketData[ticketQuery.trim()];
    if (found) {
      setResult(found);
      setError('');
    } else {
      setResult(null);
      setError('Ticket not found. Check the number and try again.');
    }
  }, [ticketQuery, ticketData]);

  const handleVerify = () => {
    const found = ticketData[ticketNumber.trim()];
    if (found) {
      setResult(found);
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
          <AppText variant="h1" color={COLORS.textPrimary}>Payouts</AppText>
          <AppText variant="p2" style={{ marginTop: SPACING.sm }}>Scan or enter a ticket to verify</AppText>
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
              activeOpacity={OPACITY.active}
              onPress={handleReset}
              leftIcon={<MaterialIcons name="qr-code-scanner" size={20} color={COLORS.black} />}
            />

            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <AppText variant="p3" color={COLORS.textSecondary} style={{ textAlign: 'center', letterSpacing: 1, marginHorizontal: SPACING.md }}>OR ENTER TICKET NUMBER</AppText>
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
                activeOpacity={OPACITY.active}
                onPress={handleVerify}
              />
            </View>

            {error ? <AppText variant="p2" color={COLORS.danger} style={{ marginTop: SPACING.sm, textAlign: 'center' }}>{error}</AppText> : null}
          </>
        ) : null}

        {result ? <TicketCard data={result} /> : null}

        {result ? (
          <Button
            title="Scan Another"
            variant="scan"
            style={styles.scanAnotherButton}
            activeOpacity={OPACITY.active}
            onPress={handleReset}
          />
        ) : null}
      </ScrollView>
    </Screen>
  );
}

const createStyles = (COLORS: ReturnType<typeof useThemeColors>) => StyleSheet.create({
  container: {
    paddingBottom: SPACING.huge,
  },
  heading: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
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
    borderTopWidth: BORDERS.thin,
    borderLeftWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderTopLeftRadius: RADIUS.xs,
  },
  scanCornerTopRight: {
    position: 'absolute',
    top: SPACING.lg,
    right: SPACING.lg,
    width: 24,
    height: 24,
    borderTopWidth: BORDERS.thin,
    borderRightWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderTopRightRadius: RADIUS.xs,
  },
  scanCornerBottomLeft: {
    position: 'absolute',
    bottom: SPACING.lg,
    left: SPACING.lg,
    width: 24,
    height: 24,
    borderBottomWidth: BORDERS.thin,
    borderLeftWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderBottomLeftRadius: RADIUS.xs,
  },
  scanCornerBottomRight: {
    position: 'absolute',
    bottom: SPACING.lg,
    right: SPACING.lg,
    width: 24,
    height: 24,
    borderBottomWidth: BORDERS.thin,
    borderRightWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    borderBottomRightRadius: RADIUS.xs,
  },
  scanButton: {
    width: 190,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  scanButtonText: {
    color: COLORS.black,

    marginLeft: SPACING.sm,

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
  verifyRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  inputWrapper: {
    flex: 1,
    marginBottom: SPACING.none,
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
  scanAnotherButton: {
    marginTop: SPACING.lg,
    borderRadius: RADIUS.xl,
    paddingVertical: SPACING.md,
    alignItems: 'center',
  },
});
