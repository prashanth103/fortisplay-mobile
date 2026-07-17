import { BORDERS, OPACITY, RADIUS, SHADOWS, SPACING } from '@/theme';
import AppText from '@/components/common/AppText';
import Input from '@/components/common/Input';
import TicketCard, { TicketCardData } from '@/components/common/TicketCard';
import Screen from '@/components/layout/Screen';
import { useThemeColors } from "@/hooks/useThemeColors";

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SalesScreen() {

  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const salesData: (TicketCardData & {
    id: string;
    title: string;
    subtitle: string;
    amount: number;
    badge: string;
    avatarText: string;
    avatarColor: string;
  })[] = [
    {
      id: '1',
      title: 'KB2 · WIN',
      subtitle: 'No. 8266150525 · 4:32:18 PM',
      amount: 5,
      badge: 'EXACT',
      avatarText: 'YW',
      avatarColor: COLORS.avatarYellow,
      status: 'WON',
      ticketType: 'KB2 · WIN',
      option: 'EXACT',
      ticketNumber: '8266150525',
      date: '21-06-2026, 4:32 PM',
      betAmount: 5,
      iconText: 'YW',
      iconColor: COLORS.avatarYellow,
      subtitle: 'Yellow',
      note: 'Race won — payout due.',
      payout: 75,
    },
    {
      id: '2',
      title: 'KB1 · FORECAST',
      subtitle: 'No. 8266144213 · 4:18:46 PM',
      amount: 10,
      badge: 'ANY',
      avatarText: 'SB',
      avatarColor: COLORS.avatarBlue,
      status: 'LOST',
      ticketType: 'KB1 · FORECAST',
      option: 'ANY',
      ticketNumber: '8266144213',
      date: '21-06-2026, 4:18 PM',
      betAmount: 10,
      iconText: 'SB',
      iconColor: COLORS.avatarBlue,
      subtitle: 'Light Blue',
      note: 'No payout — this ticket did not win.',
    },
    {
      id: '3',
      title: 'KB1 · WIN',
      subtitle: 'No. 8259181740 · 4:05:09 PM',
      amount: 5,
      badge: 'EXACT',
      avatarText: 'LG',
      avatarColor: COLORS.avatarGreen,
      status: 'PENDING',
      ticketType: 'KB1 · WIN',
      option: 'EXACT',
      ticketNumber: '8259181740',
      date: '21-06-2026, 4:05 PM',
      betAmount: 5,
      iconText: 'LG',
      iconColor: COLORS.avatarGreen,
      subtitle: 'Light Green',
      note: 'Race not finished — payout pending result.',
    },
    {
      id: '4',
      title: 'KB2 · TRIFECTA',
      subtitle: 'No. 8254222906 · 3:52:31 PM',
      amount: 20,
      badge: 'ANY',
      avatarText: 'OR',
      avatarColor: COLORS.avatarOrange,
      status: 'PENDING',
      ticketType: 'KB2 · TRIFECTA',
      option: 'ANY',
      ticketNumber: '8254222906',
      date: '21-06-2026, 3:52 PM',
      betAmount: 20,
      iconText: 'OR',
      iconColor: COLORS.avatarOrange,
      subtitle: 'Orange',
      note: 'This ticket is still pending review.',
    },
    {
      id: '5',
      title: 'KB1 · QUARTET',
      subtitle: 'No. 8248913558 · 3:40:55 PM',
      amount: 15,
      badge: 'EXACT',
      avatarText: 'SV',
      avatarColor: COLORS.avatarGrey,
      status: 'LOST',
      ticketType: 'KB1 · QUARTET',
      option: 'EXACT',
      ticketNumber: '8248913558',
      date: '21-06-2026, 3:40 PM',
      betAmount: 15,
      iconText: 'SV',
      iconColor: COLORS.avatarGrey,
      subtitle: 'Silver',
      note: 'This ticket did not qualify for payout.',
    },
    {
      id: '6',
      title: 'KB3 · WIN',
      subtitle: 'No. 824290817 · 3:25:12 PM',
      amount: 5,
      badge: 'EXACT',
      avatarText: 'RD',
      avatarColor: COLORS.avatarRed,
      status: 'PENDING',
      ticketType: 'KB3 · WIN',
      option: 'EXACT',
      ticketNumber: '824290817',
      date: '21-06-2026, 3:25 PM',
      betAmount: 5,
      iconText: 'RD',
      iconColor: COLORS.avatarRed,
      subtitle: 'Red',
      note: 'Race not finished — payout pending result.',
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
          <AppText variant="p2" style={{ marginTop: SPACING.sm }}>Today's transactions</AppText>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <AppText variant="p3" color={COLORS.textSecondary} style={{ letterSpacing: 0.5, marginBottom: SPACING.sm }}>TOTAL SALES</AppText>
            <AppText fontSize={26} fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>₱ {totalSales}</AppText>
          </View>
          <View style={styles.summaryCard}>
            <AppText variant="p3" color={COLORS.textSecondary} style={{ letterSpacing: 0.5, marginBottom: SPACING.sm }}>TICKETS</AppText>
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
            <TicketCard data={selectedSale} />
          </View>
        ) : (
          filteredSales.map((item) => (
            <TouchableOpacity key={item.id} style={styles.saleCard} activeOpacity={OPACITY.active} onPress={() => handleItemPress(item.ticketNumber)}>
              <View style={[styles.avatarBorder, { borderColor: item.avatarColor, backgroundColor: item.avatarColor }]}>
                <View style={styles.avatar}>
                  <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.black}>{item.avatarText}</AppText>
                </View>
              </View>
              <View style={styles.saleInfo}>
                <View style={styles.saleTitleRow}>
                  <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.textPrimary}>{item.title}</AppText>
                  <View style={[styles.itemBadge, { backgroundColor: COLORS.badgeBackgroundDark }]}>
                    <AppText fontSize={10} fontFamily="ManropeBold" color={COLORS.primary} style={{ letterSpacing: 0.5 }}>
                      {item.badge}
                    </AppText>
                  </View>
                </View>
                <AppText variant="p3" color={COLORS.textSecondary}>{item.subtitle}</AppText>
              </View>
              <AppText variant="p2" fontFamily="ManropeExtraBold" color={COLORS.white} style={{ marginLeft: SPACING.sm }}>₱{item.amount}</AppText>
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
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    minHeight: 78,
  },
  summaryLabel: {
    color: COLORS.walletLabel,
    fontSize: 11,
    letterSpacing: 0.6,
    marginBottom: SPACING.sm,
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
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
  },
  avatarBorder: {
    width: 52,
    height: 52,
    borderRadius: RADIUS.xxxl,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.lg,
    ...SHADOWS.avatar,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.xl,
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
    gap: SPACING.sm,
    marginBottom: SPACING.xs,
  },
  cardTitle: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: SPACING.xs,
  },
  saleTitle: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  itemBadge: {
    borderRadius: RADIUS.xs,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
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
});
