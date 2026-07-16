import { RADIUS, SPACING } from '@/theme';
import AppText from '@/components/common/AppText';
import Screen from '@/components/layout/Screen';
import { useThemeColors } from "@/hooks/useThemeColors";
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { ComponentProps } from "react";
import { ScrollView, StyleSheet, View } from 'react-native';

export default function WalletScreen() {

  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

  const topStats: Array<{
    id: string;
    title: string;
    value: string;
    icon: MaterialIconName;
    backgroundColor: string;
    iconBackground: string;
    iconColor: string;
  }> = [
      {
        id: 'sales',
        title: 'Total Sales',
        value: '₱ 400',
        icon: 'trending-up',
        backgroundColor: COLORS.walletCard,
        iconBackground: COLORS.walletIconBackground,
        iconColor: COLORS.walletAccent,
      },
    ];

  const actionCards: Array<{
    id: string;
    title: string;
    value: string;
    icon: MaterialIconName;
    backgroundColor: string;
    textColor: string;
    labelColor: string;
    iconBackground: string;
    iconColor: string;
    iconSize: number;
  }> = [
      {
        id: 'cash',
        title: 'Cash in Hand',
        value: '₱1,250.00',
        icon: 'account-balance-wallet',
        backgroundColor: COLORS.primary,
        textColor: COLORS.black,
        labelColor: COLORS.black,
        iconBackground: COLORS.walletPrimaryDark,
        iconColor: COLORS.black,
        iconSize: 20,
      },
      {
        id: 'commission',
        title: 'My Commission',
        value: '₱ 40.00',
        icon: 'percent',
        backgroundColor: COLORS.walletCard,
        textColor: COLORS.walletText,
        labelColor: COLORS.walletLabel,
        iconBackground: COLORS.walletIconBackground,
        iconColor: COLORS.walletAccent,
        iconSize: 24,
      },
    ];

  const statCards: Array<{
    id: string;
    title: string;
    value: string;
    icon: MaterialIconName;
    backgroundColor: string;
    iconBackground: string;
    iconColor: string;
    labelColor: string;
  }> = [
    {
      id: 'received',
      title: 'RECEIVED',
      value: '₱ 0',
      icon: 'arrow-downward',
      backgroundColor: COLORS.white,
      iconBackground: COLORS.walletIconBackground,
      iconColor: COLORS.walletStatIconColor,
      labelColor: COLORS.textSecondary,
    },
    {
      id: 'remitted',
      title: 'REMITTED',
      value: '₱ 100',
      icon: 'arrow-forward',
      backgroundColor: COLORS.white,
      iconBackground: COLORS.walletIconBackground,
      iconColor: COLORS.walletStatIconColor,
      labelColor: COLORS.textSecondary,
    },
    {
      id: 'cancel',
      title: 'CANCEL',
      value: '₱ 0',
      icon: 'close',
      backgroundColor: COLORS.white,
      iconBackground: COLORS.walletIconBackground,
      iconColor: COLORS.walletStatIconColor,
      labelColor: COLORS.textSecondary,
    },
    {
      id: 'payouts',
      title: 'PAYOUTS',
      value: '₱ 0',
      icon: 'payments',
      backgroundColor: COLORS.white,
      iconBackground: COLORS.walletIconBackground,
      iconColor: COLORS.walletStatIconColor,
      labelColor: COLORS.textSecondary,
    },
  ] as const;

  const historyItems: Array<{
    id: string;
    title: string;
    subtitle: string;
    amount: string;
    amountColor: string;
    icon: MaterialIconName;
    iconColor: string;
    backgroundColor: string;
  }> = [
    {
      id: '1',
      title: 'Received',
      subtitle: 'Cash · 17:22:08',
      amount: '+₱500',
      amountColor: COLORS.walletSuccess,
      icon: 'arrow-downward',
      iconColor: COLORS.walletSuccess,
      backgroundColor: COLORS.walletHistoryCard,
    },
    {
      id: '2',
      title: 'Payout Sent',
      subtitle: 'Bank transfer · 16:30:52',
      amount: '-₱200',
      amountColor: COLORS.danger,
      icon: 'arrow-upward',
      iconColor: COLORS.danger,
      backgroundColor: COLORS.walletHistoryCard,
    },
    {
      id: '3',
      title: 'Sales settled',
      subtitle: 'Ticket · 15:48:10',
      amount: '+₱800',
      amountColor: COLORS.walletSuccess,
      icon: 'check-circle',
      iconColor: COLORS.walletInfo,
      backgroundColor: COLORS.walletHistoryCard,
    },
    {
      id: '4',
      title: 'Cash added',
      subtitle: 'Deposit · 14:10:28',
      amount: '+₱300',
      amountColor: COLORS.walletSuccess,
      icon: 'paid',
      iconColor: COLORS.walletAccent,
      backgroundColor: COLORS.walletHistoryCard,
    },
  ] as const;
  return (
    <Screen backgroundColor={COLORS.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <AppText variant="h1">Wallet</AppText>
          <AppText variant="p2" style={{ marginTop: SPACING.sm }}>Today's cash flow</AppText>
        </View>

        <View style={styles.topRow}>
          {topStats.map((item) => (
            <View key={item.id} style={[styles.summaryCard, { backgroundColor: item.backgroundColor }]}>
              <View style={styles.summaryRow}>
                <View style={[styles.summaryIcon, { backgroundColor: item.iconBackground }]}>
                  <MaterialIcons name={item.icon} size={22} color={item.iconColor} />
                </View>
                <View style={styles.summaryInfo}>
                  <AppText variant="p3" color={COLORS.walletLabel} style={{ textTransform: "uppercase", letterSpacing: 0.8, marginBottom: SPACING.sm }}>{item.title}</AppText>
                  <AppText fontSize={28} fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>{item.value}</AppText>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionRow}>
          {actionCards.map((item) => (
            <View key={item.id} style={[styles.actionCard, { backgroundColor: item.backgroundColor }]}>
              <View style={[styles.actionIcon, { backgroundColor: item.iconBackground }]}>
                <MaterialIcons name={item.icon} size={item.iconSize} color={item.iconColor} />
              </View>
              <AppText fontSize={25} fontFamily="ManropeExtraBold" color={item.textColor} style={{ marginBottom: SPACING.sm }}>{item.value}</AppText>
              <AppText variant="p3" color={item.labelColor} style={{ textTransform: "uppercase", letterSpacing: 0.6 }}>
                {item.title}
              </AppText>
            </View>
          ))}
        </View>

        <View style={styles.statGrid}>
          {statCards.map((item) => (
            <View key={item.id} style={[styles.statCard, { backgroundColor: item.backgroundColor }]}>
              <View style={[styles.statIcon, { backgroundColor: item.iconBackground }]}>
                <MaterialIcons name={item.icon} size={17} color={item.iconColor} />
              </View>
              <View style={styles.statText}>
                <AppText variant="h4" style={{ marginBottom: SPACING.xs }}>{item.value}</AppText>
                <AppText variant="p3" color={item.labelColor}>{item.title}</AppText>
              </View>
            </View>
          ))}
        </View>

        <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.walletText} style={{ marginBottom: SPACING.md, letterSpacing: 0.5 }}>Transaction History</AppText>
        {historyItems.map((item) => (
          <View key={item.id} style={[styles.historyCard, { backgroundColor: item.backgroundColor }]}>
            <View style={[styles.historyIcon, { backgroundColor: item.iconColor + '22' }]}>
              <MaterialIcons name={item.icon} size={20} color={item.iconColor} />
            </View>
            <View style={styles.historyText}>
              <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.textPrimary} style={{ marginBottom: SPACING.xxs }}>{item.title}</AppText>
              <AppText variant="p3" color={COLORS.textSecondary}>{item.subtitle}</AppText>
            </View>
            <AppText variant="p2" fontFamily="ManropeBold" color={item.amountColor}>{item.amount}</AppText>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    paddingBottom: SPACING.xxxl,
  },
  header: {
    marginTop: SPACING.md,
    marginBottom: SPACING.xl,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    fontSize: 14,
  },
  topRow: {
    marginBottom: SPACING.xl,
  },
  summaryCard: {
    width: '100%',
    borderRadius: RADIUS.xl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    minHeight: 86,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryIcon: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.lg,
  },
  summaryInfo: {
    flex: 1,
  },
  summaryLabel: {
    color: COLORS.walletLabel,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: SPACING.sm,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.textPrimary,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  actionCard: {
    width: '48%',
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    minHeight: 148,
    justifyContent: 'space-between',
  },
  actionIcon: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },

  actionValue: {
    fontSize: 25,
    fontWeight: '900',
    marginBottom: SPACING.sm,
  },

  actionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SPACING.xxl,
  },
  statCard: {
    width: '48%',
    padding: SPACING.md,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 90,
  },

  statIcon: {
    width: 42,
    height: 42,
    borderRadius: RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  statText: {
    flex: 1,
    alignItems: 'flex-end',
  },

  statValue: {
    fontSize: 19,
    fontWeight: '800',
    marginBottom: SPACING.xs,
  },

  statLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  sectionTitle: {
    color: COLORS.walletText,
    marginBottom: SPACING.md,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  historyIcon: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.sm,
  },
  historyText: {
    flex: 1,
  },
  historyTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: SPACING.xxs,
  },
  historySubtitle: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  historyAmount: {
    fontSize: 15,
    fontWeight: '700',
  },
});
