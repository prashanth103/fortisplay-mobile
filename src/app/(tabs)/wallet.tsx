import AppText from '@/components/common/AppText';
import Card from '@/components/common/Card';
import Screen from '@/components/layout/Screen';
import { ACTION_CARDS, HISTORY_ITEMS, STAT_CARDS, TOP_STATS } from '@/data/dummyData';
import { useThemeColors } from '@/hooks/useThemeColors';
import { RADIUS, SPACING } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function WalletScreen() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  return (
    <Screen backgroundColor={COLORS.bg}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <AppText variant="h1">Wallet</AppText>
          <AppText variant="p2" style={{ marginTop: SPACING.sm }}>Today's cash flow</AppText>
        </View>

        <View style={styles.topRow}>
          {TOP_STATS.map((item) => (
            <Card key={item.id} width="100%" backgroundColor={COLORS[item.backgroundColorKey] as string} padding={SPACING.xxl} radius={RADIUS.xl}>
              <View style={styles.summaryRow}>
                <View style={[styles.summaryIcon, { backgroundColor: COLORS[item.iconBackgroundKey] as string }]}>
                  <MaterialIcons name={item.icon} size={22} color={COLORS[item.iconColorKey] as string} />
                </View>
                <View style={styles.summaryInfo}>
                  <AppText variant="p3" color={COLORS.textMuted} style={{ textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: SPACING.sm }}>{item.title}</AppText>
                  <AppText variant='h3' color={COLORS.text}>{item.value}</AppText>
                </View>
              </View>
            </Card>
          ))}
        </View>

        <View style={styles.actionRow}>
          {ACTION_CARDS.map((item) => (
            <Card key={item.id} width="48%" backgroundColor={COLORS[item.backgroundColorKey] as string} padding={SPACING.lg} radius={RADIUS.lg}>
              <View style={[styles.actionIcon, { backgroundColor: COLORS[item.iconBackgroundKey] as string }]}>
                <MaterialIcons name={item.icon} size={item.iconSize} color={COLORS[item.iconColorKey] as string} />
              </View>
              <AppText color={COLORS[item.textColorKey] as string} style={{ marginBottom: SPACING.sm }}>{item.value}</AppText>
              <AppText variant="p3" color={COLORS[item.labelColorKey] as string} style={{ textTransform: 'uppercase', letterSpacing: 0.6 }}>
                {item.title}
              </AppText>
            </Card>
          ))}
        </View>

        <View style={styles.statGrid}>
          {STAT_CARDS.map((item) => (
            <Card key={item.id} style={styles.statCard} width="48%" backgroundColor={COLORS[item.backgroundColorKey] as string} padding={SPACING.xl} radius={RADIUS.md}>
              <View style={[styles.statIcon, { backgroundColor: COLORS[item.iconBackgroundKey] as string }]}>
                <MaterialIcons name={item.icon} size={17} color={COLORS[item.iconColorKey] as string} />
              </View>
              <View style={styles.statText}>
                <AppText variant="h3" color={COLORS.black} style={{ marginBottom: SPACING.xs }}>{item.value}</AppText>
                <AppText variant="p3" color={COLORS[item.labelColorKey] as string}>{item.title}</AppText>
              </View>
            </Card>
          ))}
        </View>

        <AppText variant="p2" color={COLORS.text} style={{ marginBottom: SPACING.md, letterSpacing: 0.5 }}>Transaction History</AppText>
        {HISTORY_ITEMS.map((item) => {
          const iconColor = COLORS[item.iconColorKey] as string;
          return (
            <Card key={item.id} style={styles.historyCard} backgroundColor={COLORS[item.backgroundColorKey] as string} padding={SPACING.lg} radius={RADIUS.xl}>
              <View style={[styles.historyIcon, { backgroundColor: iconColor + '22' }]}>
                <MaterialIcons name={item.icon} size={20} color={iconColor} />
              </View>
              <View style={styles.historyText}>
                <AppText variant="p2" color={COLORS.text} style={{ marginBottom: SPACING.xxs }}>{item.title}</AppText>
                <AppText variant="p3" color={COLORS.textMuted}>{item.subtitle}</AppText>
              </View>
              <AppText variant="p2" color={COLORS[item.amountColorKey] as string}>{item.amount}</AppText>
            </Card>
          );
        })}
      </ScrollView>
    </Screen>
  );
}

const createStyles = (COLORS: ReturnType<typeof useThemeColors>) => StyleSheet.create({
  container: {
    paddingBottom: SPACING.xxxl,
  },
  header: {
    marginTop: SPACING.md,
    marginBottom: SPACING.xl,
  },
  topRow: {
    marginBottom: SPACING.lg,
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
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xl,
  },
  actionIcon: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SPACING.xxl,
  },
  statCard: {
    marginBottom: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
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
  historyCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
