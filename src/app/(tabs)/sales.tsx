import AppText from '@/components/common/AppText';
import Input from '@/components/common/Input';
import Screen from '@/components/layout/Screen';
import { useThemeColors } from "@/hooks/useThemeColors";
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SalesScreen() {

  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const salesData = [
    {
      id: '1',
      title: 'KB2 · WIN',
      subtitle: 'No. 8266150525 · 4:32:18 PM',
      detailSubtitle: 'Yellow',
      amount: 5,
      badge: 'EXACT',
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'YW',
      avatarColor: COLORS.avatarYellow,
      avatarTextColor: COLORS.black,
      status: 'WON',
      statusBackground: COLORS.payoutBackground,
      statusTextColor: COLORS.finished,
      ticketNumber: '8266150525',
      date: '21-06-2026, 4:32 PM',
      betAmount: 5,
      resultLabel: 'PAYOUT DUE',
      resultValue: 75,
      resultNote: 'Race won — payout due.',
      resultNoteColor: COLORS.finished,
      resultNoteBg: COLORS.payoutBackground,
    },
    {
      id: '2',
      title: 'KB1 · FORECAST',
      subtitle: 'No. 8266144213 · 4:18:46 PM',
      detailSubtitle: 'Light Blue',
      amount: 10,
      badge: 'ANY',
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'SB',
      avatarColor: COLORS.avatarBlue,
      avatarTextColor: COLORS.black,
      status: 'LOST',
      statusBackground: COLORS.surface,
      statusTextColor: COLORS.iconGrey,
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
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'LG',
      avatarColor: COLORS.avatarGreen,
      avatarTextColor: COLORS.black,
      status: 'PENDING',
      statusBackground: COLORS.payoutBackground,
      statusTextColor: COLORS.primary,
      ticketNumber: '8259181740',
      date: '21-06-2026, 4:05 PM',
      betAmount: 5,
      resultLabel: 'PENDING',
      resultValue: 0,
      resultNote: 'Race not finished — payout pending result.',
      resultNoteColor: COLORS.primary,
      resultNoteBg: COLORS.payoutBackground,
    },
    {
      id: '4',
      title: 'KB2 · TRIFECTA',
      subtitle: 'No. 8254222906 · 3:52:31 PM',
      detailSubtitle: 'Orange',
      amount: 20,
      badge: 'ANY',
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'OR',
      avatarColor: COLORS.avatarOrange,
      avatarTextColor: COLORS.black,
      status: 'PENDING',
      statusBackground: COLORS.surface,
      statusTextColor: COLORS.iconGrey,
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
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'SV',
      avatarColor: COLORS.avatarGrey,
      avatarTextColor: COLORS.black,
      status: 'LOST',
      statusBackground: COLORS.surface,
      statusTextColor: COLORS.iconGrey,
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
      badgeBackground: COLORS.badgeBackgroundDark,
      badgeTextColor: COLORS.primary,
      avatarText: 'RD',
      avatarColor: COLORS.avatarRed,
      avatarTextColor: COLORS.black,
      status: 'PENDING',
      statusBackground: COLORS.payoutBackground,
      statusTextColor: COLORS.primary,
      ticketNumber: '824290817',
      date: '21-06-2026, 3:25 PM',
      betAmount: 5,
      resultLabel: 'PENDING',
      resultValue: 0,
      resultNote: 'Race not finished — payout pending result.',
      resultNoteColor: COLORS.primary,
      resultNoteBg: COLORS.payoutBackground,
    },
  ];
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
          <AppText variant="h1">Sales</AppText>
          <AppText variant="p2" style={{ marginTop: 8 }}>Today's transactions</AppText>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <AppText variant="p3" color={COLORS.textSecondary} style={{ letterSpacing: 0.5, marginBottom: 8 }}>TOTAL SALES</AppText>
            <AppText fontSize={26} fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>₱ {totalSales}</AppText>
          </View>
          <View style={styles.summaryCard}>
            <AppText variant="p3" color={COLORS.textSecondary} style={{ letterSpacing: 0.5, marginBottom: 8 }}>TICKETS</AppText>
            <AppText fontSize={26} fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>{salesData.length}</AppText>
          </View>
        </View>

        <Input
          wrapperStyle={styles.searchBox}
          inputContainerStyle={styles.searchInputContainer}
          leftIcon={<MaterialIcons name="search" size={18} color={COLORS.textSecondary} />}
          placeholder="Search ticket no., color or pool..."
          placeholderTextColor={COLORS.textMuted}
          textColor={COLORS.textPrimary}
          value={query}
          onChangeText={setQuery}
        />

        {selectedSale ? (
          <View style={styles.detailContainer}>
            <Pressable onPress={() => setSelectedSaleId(null)} style={styles.backButton}>
              <MaterialIcons name="arrow-back-ios" size={18} color={COLORS.textPrimary} />
              <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.white}>Back</AppText>
            </Pressable>
            <View style={styles.detailCard}>
              <View style={styles.detailHeader}>
                <AppText variant="p1" fontFamily="ManropeExtraBold" color={COLORS.black}>Ticket Details</AppText>
                <View style={[styles.statusBadge, { backgroundColor: selectedSale.statusBackground }]}>
                  <AppText variant="p3" fontFamily="ManropeExtraBold" color={selectedSale.statusTextColor}>{selectedSale.status}</AppText>
                </View>
              </View>

              <View style={styles.ticketBody}>
                <View style={[styles.ticketIconOuter, { backgroundColor: selectedSale.avatarColor }]}>
                  <View style={styles.ticketIconInner}>
                    <AppText variant="p2" fontFamily="ManropeExtraBold" color={selectedSale.avatarTextColor}>{selectedSale.avatarText}</AppText>
                  </View>
                </View>
                <View style={styles.ticketInfo}>
                  <View style={styles.ticketTitleRow}>
                    <AppText variant="p2" fontFamily="ManropeExtraBold" color={COLORS.black} style={{ flex: 1 }}>{selectedSale.title}</AppText>
                    <View style={[styles.itemBadge, { backgroundColor: selectedSale.badgeBackground }]}>
                      <AppText fontSize={10} fontFamily="ManropeBold" color={COLORS.black} style={{ letterSpacing: 0.5 }}>{selectedSale.badge}</AppText>
                    </View>
                  </View>
                  <AppText variant="p3" color={COLORS.textSecondary}>{selectedSale.detailSubtitle}</AppText>
                  {selectedSale.resultLabel ? (
                    <AppText variant="p3" fontFamily="ManropeBold" color={selectedSale.resultNoteColor} style={{ marginTop: 4 }}>
                      {selectedSale.resultLabel}
                    </AppText>
                  ) : null}
                </View>
              </View>

              <View style={styles.ticketDetailsRow}>
                <AppText variant="p3" color={COLORS.tableHeader}>Ticket</AppText>
                <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>No. {selectedSale.ticketNumber}</AppText>
              </View>
              <View style={styles.ticketDetailsRow}>
                <AppText variant="p3" color={COLORS.tableHeader}>Date</AppText>
                <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>{selectedSale.date}</AppText>
              </View>
              <View style={styles.ticketDetailsRow}>
                <AppText variant="p3" color={COLORS.tableHeader}>Bet Amount</AppText>
                <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.black}>₱{selectedSale.betAmount}</AppText>
              </View>

              <View style={[styles.resultBox, { backgroundColor: selectedSale.resultNoteBg }]}>
                <AppText variant="p3" fontFamily="ManropeBold" color={selectedSale.resultNoteColor} style={{ flex: 1 }}>{selectedSale.resultNote}</AppText>
                {selectedSale.resultValue ? (
                  <AppText variant="h4" fontFamily="ManropeExtraBold" color={COLORS.successText}>₱{selectedSale.resultValue}</AppText>
                ) : null}
              </View>
            </View>
          </View>
        ) : (
          filteredSales.map((item) => (
            <TouchableOpacity key={item.id} style={styles.saleCard} activeOpacity={0.8} onPress={() => handleItemPress(item.ticketNumber)}>
              <View style={[styles.avatarBorder, { borderColor: item.avatarColor, backgroundColor: item.avatarColor }]}>
                <View style={styles.avatar}>
                  <AppText variant="p2" fontFamily="ManropeBold" color={item.avatarTextColor}>{item.avatarText}</AppText>
                </View>
              </View>
              <View style={styles.saleInfo}>
                <View style={styles.saleTitleRow}>
                  <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.textPrimary}>{item.title}</AppText>
                  <View style={[styles.itemBadge, { backgroundColor: item.badgeBackground }]}>
                    <AppText fontSize={10} fontFamily="ManropeBold" color={COLORS.black} style={[{ letterSpacing: 0.5 }, { color: item.badgeTextColor }]}>
                      {item.badge}
                    </AppText>
                  </View>
                </View>
                <AppText variant="p3" color={COLORS.textSecondary}>{item.subtitle}</AppText>
              </View>
              <AppText variant="p2" fontFamily="ManropeExtraBold" color={COLORS.white} style={{ marginLeft: 8 }}>₱{item.amount}</AppText>
            </TouchableOpacity>
          ))
        )}
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
    fontSize: 32,
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
    backgroundColor: COLORS.walletCard,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    minHeight: 78,
  },
  summaryLabel: {
    color: COLORS.walletLabel,
    fontSize: 11,
    letterSpacing: 0.6,
    marginBottom: 6,
  },

  summaryValue: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '900',
  },
  searchBox: {
    marginBottom: SPACING.lg,
  },
  searchInputContainer: {
    backgroundColor: COLORS.surfaceElevated,
    borderColor: COLORS.surfaceElevated,
    borderRadius: RADIUS.lg,
  },
  saleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceElevated,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatarBorder: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,

    // shadow/elevation for high color circle
    shadowColor: COLORS.black,
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  avatarText: {
    color: COLORS.textPrimary,
    fontWeight: '900',
    fontSize: 12,
  },
  saleInfo: {
    flex: 1,
  },
  saleTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
    marginBottom: 4,
  },
  cardTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  saleTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  itemBadge: {
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: COLORS.salesBadgeBackground,
  },
  itemBadgeText: {
    color: COLORS.salesBadgeText,
    fontSize: 10,
    fontWeight: '900',
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
    color: COLORS.tableHeader,
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
