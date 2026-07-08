import Screen from '@/components/layout/Screen';
import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const salesData = [
  {
    id: '1',
    title: 'KB2 · WIN',
    subtitle: 'No. 8266150525 · 4:32:18 PM',
    detailSubtitle: 'Yellow',
    amount: 5,
    badge: 'EXACT',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'YW',
    avatarColor: '#F8D44E',
    avatarTextColor: '#141414',
    status: 'WON',
    statusBackground: COLORS.payoutBackground,
    statusTextColor: COLORS.payoutText,
    ticketNumber: '8266150525',
    date: '21-06-2026, 4:32 PM',
    betAmount: 5,
    resultLabel: 'PAYOUT DUE',
    resultValue: 75,
    resultNote: 'Race won — payout due.',
    resultNoteColor: COLORS.payoutText,
    resultNoteBg: COLORS.payoutBackground,
  },
  {
    id: '2',
    title: 'KB1 · FORECAST',
    subtitle: 'No. 8266144213 · 4:18:46 PM',
    detailSubtitle: 'Light Blue',
    amount: 10,
    badge: 'ANY',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'SB',
    avatarColor: '#6BB9FF',
    avatarTextColor: COLORS.white,
    status: 'LOST',
    statusBackground: COLORS.surface,
    statusTextColor: COLORS.lost,
    ticketNumber: '8266144213',
    date: '21-06-2026, 4:18 PM',
    betAmount: 10,
    resultLabel: 'NO PAYOUT',
    resultValue: 0,
    resultNote: 'No payout — this ticket did not win.',
    resultNoteColor: COLORS.textSecondary,
    resultNoteBg: COLORS.surface,
  },
  {
    id: '3',
    title: 'KB1 · WIN',
    subtitle: 'No. 8259181740 · 4:05:09 PM',
    detailSubtitle: 'Light Green',
    amount: 5,
    badge: 'EXACT',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'LG',
    avatarColor: '#58D16A',
    avatarTextColor: COLORS.white,
    status: 'PENDING',
    statusBackground: COLORS.payoutBackground,
    statusTextColor: COLORS.warning,
    ticketNumber: '8259181740',
    date: '21-06-2026, 4:05 PM',
    betAmount: 5,
    resultLabel: 'PENDING',
    resultValue: 0,
    resultNote: 'Race not finished — payout pending result.',
    resultNoteColor: COLORS.warning,
    resultNoteBg: COLORS.payoutBackground,
  },
  {
    id: '4',
    title: 'KB2 · TRIFECTA',
    subtitle: 'No. 8254222906 · 3:52:31 PM',
    detailSubtitle: 'Orange',
    amount: 20,
    badge: 'ANY',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'OR',
    avatarColor: '#F28B34',
    avatarTextColor: COLORS.white,
    status: 'PENDING',
    statusBackground: COLORS.surface,
    statusTextColor: COLORS.lost,
    ticketNumber: '8254222906',
    date: '21-06-2026, 3:52 PM',
    betAmount: 20,
    resultLabel: 'PENDING',
    resultValue: 0,
    resultNote: 'This ticket is still pending review.',
    resultNoteColor: COLORS.textSecondary,
    resultNoteBg: COLORS.surface,
  },
  {
    id: '5',
    title: 'KB1 · QUARTET',
    subtitle: 'No. 8248913558 · 3:40:55 PM',
    detailSubtitle: 'Silver',
    amount: 15,
    badge: 'EXACT',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'SV',
    avatarColor: '#D9D9D9',
    avatarTextColor: '#141414',
    status: 'LOST',
    statusBackground: COLORS.surface,
    statusTextColor: COLORS.lost,
    ticketNumber: '8248913558',
    date: '21-06-2026, 3:40 PM',
    betAmount: 15,
    resultLabel: 'NO PAYOUT',
    resultValue: 0,
    resultNote: 'This ticket did not qualify for payout.',
    resultNoteColor: COLORS.textSecondary,
    resultNoteBg: COLORS.surface,
  },
  {
    id: '6',
    title: 'KB3 · WIN',
    subtitle: 'No. 824290817 · 3:25:12 PM',
    detailSubtitle: 'Red',
    amount: 5,
    badge: 'EXACT',
    badgeBackground: COLORS.warning,
    badgeTextColor: COLORS.black,
    avatarText: 'RD',
    avatarColor: '#F15151',
    avatarTextColor: COLORS.white,
    status: 'PENDING',
    statusBackground: COLORS.payoutBackground,
    statusTextColor: COLORS.warning,
    ticketNumber: '824290817',
    date: '21-06-2026, 3:25 PM',
    betAmount: 5,
    resultLabel: 'PENDING',
    resultValue: 0,
    resultNote: 'Race not finished — payout pending result.',
    resultNoteColor: COLORS.warning,
    resultNoteBg: COLORS.payoutBackground,
  },
];

export default function SalesScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);

  const selectedSale = useMemo(
    () => salesData.find((item) => item.id === selectedSaleId) ?? null,
    [selectedSaleId]
  );

  const handleItemPress = (ticketNumber: string) => {
    router.push(`/payouts?ticket=${ticketNumber}`);
  };

  const filteredSales = useMemo(
    () =>
      salesData.filter((item) => {
        const search = query.trim().toLowerCase();
        return (
          !search ||
          item.title.toLowerCase().includes(search) ||
          item.subtitle.toLowerCase().includes(search) ||
          item.avatarText.toLowerCase().includes(search)
        );
      }),
    [query]
  );

  const totalSales = useMemo(
    () => salesData.reduce((total, item) => total + item.amount, 0),
    []
  );

  return (
    <Screen backgroundColor={COLORS.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
          <Text style={TYPOGRAPHY.h1}>Sales</Text>
          <Text style={styles.subtitle}>Today's transactions</Text>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>TOTAL SALES</Text>
            <Text style={styles.summaryValue}>₱{totalSales}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>TICKETS</Text>
            <Text style={styles.summaryValue}>{salesData.length}</Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <MaterialIcons name="search" size={18} color={COLORS.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search ticket no., color or pool..."
            placeholderTextColor={COLORS.textSecondary}
            value={query}
            onChangeText={setQuery}
          />
        </View>

        {selectedSale ? (
          <View style={styles.detailContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => setSelectedSaleId(null)}>
              <MaterialIcons name="arrow-back-ios" size={18} color={COLORS.white} />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.detailCard}>
              <View style={styles.detailHeader}>
                <Text style={styles.detailHeaderText}>Ticket Details</Text>
                <View style={[styles.statusBadge, { backgroundColor: selectedSale.statusBackground }]}>
                  <Text style={[styles.statusBadgeText, { color: selectedSale.statusTextColor }]}>{selectedSale.status}</Text>
                </View>
              </View>

              <View style={styles.ticketBody}>
                <View style={[styles.ticketIconOuter, { backgroundColor: selectedSale.avatarColor }]}>
                  <View style={styles.ticketIconInner}>
                    <Text style={[styles.ticketIconText, { color: selectedSale.avatarTextColor }]}>{selectedSale.avatarText}</Text>
                  </View>
                </View>
                <View style={styles.ticketInfo}>
                  <View style={styles.ticketTitleRow}>
                    <Text style={styles.ticketTitle}>{selectedSale.title}</Text>
                    <View style={[styles.itemBadge, { backgroundColor: selectedSale.badgeBackground }]}>
                      <Text style={styles.itemBadgeText}>{selectedSale.badge}</Text>
                    </View>
                  </View>
                  <Text style={styles.ticketSubtitle}>{selectedSale.detailSubtitle}</Text>
                  {selectedSale.resultLabel ? (
                    <Text style={[styles.resultLabel, { color: selectedSale.resultNoteColor, marginTop: SPACING.xs }]}>
                      {selectedSale.resultLabel}
                    </Text>
                  ) : null}
                </View>
              </View>

              <View style={styles.ticketDetailsRow}>
                <Text style={styles.ticketLabel}>Ticket</Text>
                <Text style={styles.ticketValue}>No. {selectedSale.ticketNumber}</Text>
              </View>
              <View style={styles.ticketDetailsRow}>
                <Text style={styles.ticketLabel}>Date</Text>
                <Text style={styles.ticketValue}>{selectedSale.date}</Text>
              </View>
              <View style={styles.ticketDetailsRow}>
                <Text style={styles.ticketLabel}>Bet Amount</Text>
                <Text style={styles.ticketValue}>₱{selectedSale.betAmount}</Text>
              </View>

              <View style={[styles.resultBox, { backgroundColor: selectedSale.resultNoteBg }]}>
                <Text style={[styles.resultText, { color: selectedSale.resultNoteColor }]}>{selectedSale.resultNote}</Text>
                {selectedSale.resultValue ? (
                  <Text style={[styles.payoutAmount, { color: '#2B7A37' }]}>₱{selectedSale.resultValue}</Text>
                ) : null}
              </View>
            </View>
          </View>
        ) : (
          filteredSales.map((item) => (
            <TouchableOpacity key={item.id} style={styles.saleCard} activeOpacity={0.8} onPress={() => handleItemPress(item.ticketNumber)}>
              <View style={[styles.avatarBorder, { borderColor: item.avatarColor }]}>
                <View style={styles.avatar}>
                  <Text style={[styles.avatarText, { color: item.avatarTextColor }]}>{item.avatarText}</Text>
                </View>
              </View>
              <View style={styles.saleInfo}>
                <View style={styles.saleTitleRow}>
                  <Text style={styles.saleTitle}>{item.title}</Text>
                  <View style={[styles.itemBadge, { backgroundColor: item.badgeBackground }]}>
                    <Text style={styles.itemBadgeText}>{item.badge}</Text>
                  </View>
                </View>
                <Text style={styles.saleSubtitle}>{item.subtitle}</Text>
              </View>
              <Text style={styles.amount}>₱{item.amount}</Text>
            </TouchableOpacity>
          ))
        )}
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
  summaryRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.navyCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
  },
  summaryLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    letterSpacing: 0.5,
    marginBottom: SPACING.sm,
  },
  summaryValue: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: '800',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  searchInput: {
    flex: 1,
    color: COLORS.white,
    fontSize: 14,
    paddingVertical: SPACING.sm,
  },
  saleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatarBorder: {
    width: 46,
    height: 46,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    backgroundColor: COLORS.surfaceElevated,
    borderWidth: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  avatarText: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 14,
  },
  saleInfo: {
    flex: 1,
  },
  saleTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  saleTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
  },
  itemBadge: {
    borderRadius: 999,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    backgroundColor: '#F2C94C',
  },
  itemBadgeText: {
    color: COLORS.black,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  saleSubtitle: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  amount: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '800',
    marginLeft: SPACING.sm,
  },
  detailContainer: {
    flex: 1,
    gap: SPACING.lg,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  backText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
  detailCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xl,
    padding: SPACING.lg,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  detailHeaderText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '800',
  },
  ticketBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  ticketIconOuter: {
    width: 54,
    height: 54,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.lg,
  },
  ticketIconInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  ticketIconText: {
    fontWeight: '800',
    fontSize: 14,
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
  resultLabel: {
    fontSize: 12,
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
  statusBadge: {
    borderRadius: RADIUS.xxl,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '800',
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
});
