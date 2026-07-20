import AppText from '@/components/common/AppText';
import { useThemeColors } from '@/hooks/useThemeColors';
import { RADIUS, SPACING } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export type TicketStatus = 'WON' | 'LOST' | 'PENDING';

export interface TicketCardData {
  status: TicketStatus;
  ticketType: string;
  option: string;
  ticketNumber: string;
  date: string;
  betAmount: number;
  iconText: string;
  iconColor: string;
  subtitle: string;
  note: string;
  payout?: number;
}

interface Props {
  readonly data: Readonly<TicketCardData>;
}

function getStatusColors(status: TicketStatus, COLORS: ReturnType<typeof useThemeColors>) {
  switch (status) {
    case 'WON':
      return { bg: COLORS.successMuted, text: COLORS.success };
    case 'LOST':
      return { bg: COLORS.bgMuted, text: COLORS.text };
    case 'PENDING':
      return { bg: COLORS.warningMuted, text: COLORS.warning };
  }
}

export default function TicketCard({ data }: Props) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const statusColors = getStatusColors(data.status, COLORS);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <AppText variant="p1" color={COLORS.black}>Ticket Details</AppText>
        <View style={[styles.statusBadge, { backgroundColor: statusColors.bg }]}>
          <AppText variant="p3" color={statusColors.text}>{data.status}</AppText>
        </View>
      </View>

      <View style={styles.body}>
        <View style={[styles.icon, { backgroundColor: data.iconColor }]}>
          <View style={styles.iconInner}>
            <AppText variant="p1" color={COLORS.black}>{data.iconText}</AppText>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <AppText variant="p2" color={COLORS.black} style={{ flex: 1 }}>{data.ticketType}</AppText>
            <View style={[styles.badge, { backgroundColor: COLORS.primaryMuted }]}>
              <AppText color={COLORS.black}>{data.option}</AppText>
            </View>
          </View>
          <AppText variant="p3" color={COLORS.primaryMuted}>{data.subtitle}</AppText>
        </View>
      </View>

      <View style={styles.row}>
        <AppText variant="p3" color={COLORS.textMuted}>Ticket</AppText>
        <AppText variant="p3" color={COLORS.black}>No. {data.ticketNumber}</AppText>
      </View>
      <View style={styles.row}>
        <AppText variant="p3" color={COLORS.textMuted}>Date</AppText>
        <AppText variant="p3" color={COLORS.black}>{data.date}</AppText>
      </View>
      <View style={styles.row}>
        <AppText variant="p3" color={COLORS.textMuted}>Bet Amount</AppText>
        <AppText variant="p3" color={COLORS.black}>₱{data.betAmount}</AppText>
      </View>

      <View style={[styles.resultBox, { backgroundColor: statusColors.bg }]}>
        <AppText variant="p3" color={statusColors.text} style={{ flex: 1 }}>{String(data.note).replace(/[<>"'&]/g, '')}</AppText>
        {data.status === 'WON' && data.payout ? (
          <AppText variant="h4" color={COLORS.success}>₱{data.payout}</AppText>
        ) : null}
      </View>
    </View>
  );
}

const createStyles = (COLORS: ReturnType<typeof useThemeColors>) => StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    marginTop: SPACING.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  statusBadge: {
    borderRadius: RADIUS.xxl,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.sm,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  icon: {
    width: 54,
    height: 54,
    borderRadius: RADIUS.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.lg,
  },
  iconInner: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: SPACING.xxs,
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  badge: {
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xxs,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  resultBox: {
    marginTop: SPACING.lg,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
