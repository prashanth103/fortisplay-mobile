import AppText from '@/components/common/AppText';
import Input from '@/components/common/Input';
import TicketCard from '@/components/common/TicketCard';
import Screen from '@/components/layout/Screen';
import { SALES_DATA } from '@/data/dummyData';
import { useThemeColors } from '@/hooks/useThemeColors';
import { BORDERS, OPACITY, RADIUS, SHADOWS, SPACING } from '@/theme';

import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function SalesScreen() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);

  const salesData = useMemo(
    () => SALES_DATA.map((item) => ({
      ...item,
      avatarColor: COLORS[item.avatarColorKey] as string,
      iconColor: COLORS[item.iconColorKey] as string,
    })),
    [COLORS]
  );

  const selectedSale = useMemo(
    () => salesData.find((item) => item.id === selectedSaleId) ?? null,
    [selectedSaleId, salesData]
  );

  const filteredSales = useMemo(
    () => salesData.filter((item) => {
      const search = query.trim().toLowerCase();
      return (
        !search ||
        item.title.toLowerCase().includes(search) ||
        item.listSubtitle.toLowerCase().includes(search) ||
        item.avatarText.toLowerCase().includes(search)
      );
    }),
    [query, salesData]
  );

  const totalSales = useMemo(
    () => SALES_DATA.reduce((total, item) => total + item.amount, 0),
    []
  );

  return (
    <Screen backgroundColor={COLORS.bg}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heading}>
          <AppText fontFamily="ManropeExtraBold" variant="h1">Sales</AppText>
          <AppText fontFamily="ManropeRegular" variant="p2" style={{ marginTop: SPACING.sm }}>Today's transactions</AppText>
        </View>

        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <AppText fontFamily="ManropeRegular" variant="p3" color={COLORS.textMuted} style={{ letterSpacing: 0.5, marginBottom: SPACING.sm }}>TOTAL SALES</AppText>
            <AppText fontFamily="ManropeRegular" color={COLORS.text}>₱ {totalSales}</AppText>
          </View>
          <View style={styles.summaryCard}>
            <AppText fontFamily="ManropeRegular" variant="p3" color={COLORS.textMuted} style={{ letterSpacing: 0.5, marginBottom: SPACING.sm }}>TICKETS</AppText>
            <AppText fontFamily="ManropeRegular" color={COLORS.text}>{SALES_DATA.length}</AppText>
          </View>
        </View>

        <Input
          wrapperStyle={styles.searchBox}
          inputContainerStyle={styles.searchInputContainer}
          leftIcon={<MaterialIcons name="search" size={18} color={COLORS.textMuted} />}
          placeholder="Search ticket no., color or pool..."
          placeholderTextColor={COLORS.textMuted}
          textColor={COLORS.text}
          value={query}
          onChangeText={setQuery}
        />

        {selectedSale ? (
          <View style={styles.detailContainer}>
            <Pressable onPress={() => setSelectedSaleId(null)} style={styles.backButton}>
              <MaterialIcons name="arrow-back-ios" size={18} color={COLORS.text} />
              <AppText fontFamily="ManropeRegular" variant="p2" color={COLORS.white}>Back</AppText>
            </Pressable>
            <TicketCard data={selectedSale} />
          </View>
        ) : (
          filteredSales.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.saleCard}
              activeOpacity={OPACITY.active}
              onPress={() => router.push(`/payouts?ticket=${item.ticketNumber}`)}
            >
              <View style={[styles.avatarBorder, { borderColor: item.avatarColor, backgroundColor: item.avatarColor }]}>
                <View style={styles.avatar}>
                  <AppText fontFamily="ManropeRegular" variant="p2" color={COLORS.black}>{item.avatarText}</AppText>
                </View>
              </View>
              <View style={styles.saleInfo}>
                <View style={styles.saleTitleRow}>
                  <AppText fontFamily="ManropeRegular" variant="p2" color={COLORS.text}>{item.title}</AppText>
                  <View style={[styles.itemBadge, { backgroundColor: COLORS.primaryMuted }]}>
                    <AppText fontFamily="ManropeRegular" color={COLORS.primary} style={{ letterSpacing: 0.5 }}>
                      {item.badge}
                    </AppText>
                  </View>
                </View>
                <AppText fontFamily="ManropeRegular" variant="p3" color={COLORS.textMuted}>{item.listSubtitle}</AppText>
              </View>
              <AppText fontFamily="ManropeRegular" variant="p2" color={COLORS.white} style={{ marginLeft: SPACING.sm }}>₱{item.amount}</AppText>
            </TouchableOpacity>
          ))
        )}
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
  summaryRow: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.lg,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.bgSurface,
    borderRadius: RADIUS.sm,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    minHeight: 78,
  },
  searchBox: {
    marginBottom: SPACING.lg,
  },
  searchInputContainer: {
    backgroundColor: COLORS.bgElevated,
    borderColor: COLORS.bgElevated,
    borderRadius: RADIUS.lg,
  },
  saleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgElevated,
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
  itemBadge: {
    borderRadius: RADIUS.xs,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
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
