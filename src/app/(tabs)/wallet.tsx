import { ComponentProps } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import Screen from '@/components/layout/Screen';
import { COLORS } from '@/theme/colors';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

const topStats = [
  {
    id: 'sales',
    title: 'Total Sales',
    value: '₱400',
    icon: 'trending-up',
    backgroundColor: COLORS.walletCard,
    iconColor: COLORS.walletAccent,
  },
] as const;

const actionCards: Array<{
  id: string;
  title: string;
  value: string;
  icon: MaterialIconName;
  backgroundColor: string;
  textColor: string;
  iconBackground: string;
  iconColor: string;
}> = [
    {
      id: 'cash',
      title: 'Cash in Hand',
      value: '₱1,250.00',
      icon: 'account-balance-wallet',
      backgroundColor: COLORS.walletPrimary,
      textColor: COLORS.black,
      iconBackground: COLORS.white,
      iconColor: COLORS.black,
    },
    {
      id: 'commission',
      title: 'My Commission',
      value: '₱40.00',
      icon: 'percent',
      backgroundColor: COLORS.walletSecondary,
      textColor: COLORS.walletText,
      iconBackground: COLORS.walletCard,
      iconColor: COLORS.walletAccent,
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
    value: '₱0',
    icon: 'arrow-downward',
    backgroundColor: COLORS.white,
    iconBackground: COLORS.walletPrimary,
    iconColor: COLORS.black,
    labelColor: COLORS.textSecondary,
  },
  {
    id: 'remitted',
    title: 'REMITTED',
    value: '₱100',
    icon: 'arrow-forward',
    backgroundColor: COLORS.white,
    iconBackground: COLORS.walletSecondary,
    iconColor: COLORS.walletAccent,
    labelColor: COLORS.textSecondary,
  },
  {
    id: 'cancel',
    title: 'CANCEL',
    value: '₱0',
    icon: 'close',
    backgroundColor: COLORS.white,
    iconBackground: COLORS.walletPrimary,
    iconColor: COLORS.black,
    labelColor: COLORS.textSecondary,
  },
  {
    id: 'payouts',
    title: 'PAYOUTS',
    value: '₱0',
    icon: 'payments',
    backgroundColor: COLORS.white,
    iconBackground: COLORS.walletSecondary,
    iconColor: COLORS.walletAccent,
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
    backgroundColor: '#142026',
  },
  {
    id: '2',
    title: 'Payout Sent',
    subtitle: 'Bank transfer · 16:30:52',
    amount: '-₱200',
    amountColor: COLORS.danger,
    icon: 'arrow-upward',
    iconColor: COLORS.danger,
    backgroundColor: '#142026',
  },
  {
    id: '3',
    title: 'Sales settled',
    subtitle: 'Ticket · 15:48:10',
    amount: '+₱800',
    amountColor: COLORS.walletSuccess,
    icon: 'check-circle',
    iconColor: COLORS.walletInfo,
    backgroundColor: '#142026',
  },
  {
    id: '4',
    title: 'Cash added',
    subtitle: 'Deposit · 14:10:28',
    amount: '+₱300',
    amountColor: COLORS.walletSuccess,
    icon: 'paid',
    iconColor: COLORS.walletAccent,
    backgroundColor: '#142026',
  },
] as const;

export default function WalletScreen() {
  return (
    <Screen backgroundColor={COLORS.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Wallet</Text>
          <Text style={styles.subtitle}>Today's cash flow</Text>
        </View>

        <View style={styles.topRow}>
          {topStats.map((item) => (
            <View key={item.id} style={[styles.summaryCard, { backgroundColor: item.backgroundColor }]}>
              <View style={styles.summaryRow}>
                <View style={[styles.summaryIcon, { backgroundColor: item.iconColor }]}>
                  <MaterialIcons name={item.icon} size={20} color={COLORS.black} />
                </View>
                <View style={styles.summaryInfo}>
                  <Text style={styles.summaryLabel}>{item.title}</Text>
                  <Text style={styles.summaryValue}>{item.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionRow}>
          {actionCards.map((item, index) => (
            <View key={item.id} style={[styles.actionCard, { backgroundColor: item.backgroundColor }, index === 0 ? styles.actionCardPrimary : styles.actionCardSecondary]}>
              <View style={[styles.actionIcon, { backgroundColor: item.iconBackground }]}>
                <MaterialIcons name={item.icon} size={20} color={item.iconColor} />
              </View>
              <Text style={[styles.actionValue, { color: item.textColor }]}>{item.value}</Text>
              <Text style={[styles.actionLabel, { color: item.textColor === COLORS.black ? COLORS.black : COLORS.walletLabel }]}>{item.title}</Text>
            </View>
          ))}
        </View>

        <View style={styles.statGrid}>
          {statCards.map((item) => (
            <View key={item.id} style={[styles.statCard, { backgroundColor: item.backgroundColor }]}>
              <View style={[styles.statIcon, { backgroundColor: item.iconBackground }]}>
                <MaterialIcons name={item.icon} size={18} color={item.iconColor} />
              </View>
              <View>
                <Text style={styles.statValue}>{item.value}</Text>
                <Text style={[styles.statLabel, { color: item.labelColor }]}>{item.title}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Transaction History</Text>
        {historyItems.map((item) => (
          <View key={item.id} style={[styles.historyCard, { backgroundColor: item.backgroundColor }]}>
            <View style={[styles.historyIcon, { backgroundColor: item.iconColor + '22' }]}>
              <MaterialIcons name={item.icon} size={20} color={item.iconColor} />
            </View>
            <View style={styles.historyText}>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historySubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={[styles.historyAmount, { color: item.amountColor }]}>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  header: {
    marginTop: 12,
    marginBottom: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: 6,
    fontSize: 14,
  },
  topRow: {
    marginBottom: 18,
  },
  summaryCard: {
    width: '100%',
    borderRadius: 24,
    padding: 20,
    minHeight: 110,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  summaryInfo: {
    flex: 1,
  },
  summaryLabel: {
    color: COLORS.walletLabel,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.white,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  actionCard: {
    width: '48%',
    borderRadius: 24,
    padding: 18,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  actionCardPrimary: {
    marginRight: 0,
  },
  actionCardSecondary: {
    marginLeft: 0,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionValue: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  statCard: {
    width: '48%',
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 110,
  },
  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  sectionTitle: {
    color: COLORS.walletText,
    marginBottom: 12,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  historyIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  historyText: {
    flex: 1,
  },
  historyTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
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
