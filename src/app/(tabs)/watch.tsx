import AppText from '@/components/common/AppText';
import StripedBackground from '@/components/common/StripedBackground';
import Screen from '@/components/layout/Screen';
import { useThemeColors } from "@/hooks/useThemeColors";
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function WatchScreen() {

  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  type RaceIconName = 'play-arrow' | 'schedule';

  type WatchRace = {
    id: string;
    title: string;
    subtitle: string;
    status: 'LIVE' | 'ENDED' | 'UPCOMING';
    statusColor: string;
    cardLabel: string;
    cardText: string;
    videoTitle: string;
    infoText: string;
    icon: RaceIconName;
    progress: number;
    watchers?: string;
  };

  const raceData: WatchRace[] = [
    {
      id: 'kb1',
      title: 'KB1 · Karambola',
      subtitle: 'Race 8 · 19:35',
      status: 'ENDED',
      statusColor: COLORS.finished,
      cardLabel: 'ENDED',
      cardText: 'Race ended · Replay available',
      videoTitle: 'RACE REPLAY',
      infoText: 'Race 8 · Race has ended',
      icon: 'play-arrow',
      progress: 100,
    },
    {
      id: 'kb2',
      title: 'KB2 · Karambola',
      subtitle: 'Race 8 · 19:50',
      status: 'LIVE',
      statusColor: COLORS.danger,
      cardLabel: 'LIVE',
      cardText: 'Streaming live now',
      videoTitle: 'LIVE RACE FEED',
      infoText: 'Race 8 · Streaming live now',
      watchers: '1.2K watching',
      icon: 'play-arrow',
      progress: 64,
    },
    {
      id: 'kb3',
      title: 'KB3 · Karambola',
      subtitle: 'Race 8 · 20:05',
      status: 'UPCOMING',
      statusColor: COLORS.textSecondary,
      cardLabel: 'UPCOMING',
      cardText: 'Live in 01:25:32',
      videoTitle: 'UPCOMING',
      infoText: 'Race 8 · Starts soon',
      icon: 'schedule',
      progress: 38,
    },
  ];
  const [selectedRaceId, setSelectedRaceId] = useState('kb2');
  const selectedRace = useMemo(
    () => raceData.find(race => race.id === selectedRaceId) ?? raceData[0],
    [selectedRaceId]
  );

  return (
    <Screen backgroundColor={COLORS.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.videoCard}>
          <StripedBackground color1="#191919" color2="#222222" stripeWidth={12} />
          {/* Top Row */}
          <View style={styles.cardHeader}>
            <View style={[styles.badge, { backgroundColor: `${selectedRace.statusColor}22` }]}>
              <View style={[styles.badgeDot, { backgroundColor: selectedRace.statusColor }]} />
              <AppText variant="p3" fontFamily="ManropeBold" color={selectedRace.statusColor}>{selectedRace.cardLabel}</AppText>
            </View>
            {selectedRace.watchers ? (
              <View style={styles.watchersBadge}>
                <MaterialIcons name="visibility" size={14} color={COLORS.white} />
                <AppText fontSize={11} fontFamily="ManropeSemiBold" color={COLORS.white}>{selectedRace.watchers}</AppText>
              </View>
            ) : null}
          </View>

          {/* Center Overlay */}
          <View style={styles.centerOverlay}>
            <View style={styles.iconCircle}>
              <MaterialIcons
                name={selectedRace.icon}
                size={32}
                color={COLORS.white}
              />
            </View>
            <AppText fontSize={12} fontFamily="ManropeExtraBold" color={COLORS.textMuted} style={{ letterSpacing: 1.5 }}>{selectedRace.videoTitle}</AppText>
          </View>

          {/* Bottom Row */}
          <View style={styles.videoFooter}>
            <MaterialIcons name="volume-up" size={20} color={COLORS.white} style={styles.footerIconLeft} />

            <View style={styles.footerTrack}>
              <View
                style={[
                  styles.footerFill,
                  { width: `${selectedRace.progress}%`, backgroundColor: selectedRace.statusColor },
                ]}
              />
            </View>

            <AppText fontSize={12} fontFamily="ManropeExtraBold" color={COLORS.white} style={{ marginLeft: 16, marginRight: 16 }}>{selectedRace.cardLabel}</AppText>
            <MaterialIcons name="fullscreen" size={22} color={COLORS.white} />
          </View>
        </View>

        <View style={styles.contentHeader}>
          <AppText variant="h3">{selectedRace.title}</AppText>
          <AppText variant="p2" style={{ marginTop: 4 }}>{selectedRace.subtitle}</AppText>
        </View>

        <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.textPrimary} style={{ marginTop: 24, marginBottom: 16 }}>LIVE & UPCOMING RACES</AppText>

        {raceData.map(race => (
          <TouchableOpacity
            key={race.id}
            style={[
              styles.raceCard,
              race.id === selectedRaceId && styles.raceCardSelected,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelectedRaceId(race.id)}
          >
            <View style={styles.raceRow}>
              <View style={styles.raceThumbnail}>
                <StripedBackground color1="#141414" color2="#1D1D1D" stripeWidth={8} />
                <MaterialIcons name="play-arrow" size={18} color={COLORS.textSecondary} />
              </View>
              <View style={styles.raceInfo}>
                <AppText variant="p2" fontFamily="ManropeBold" color={COLORS.textPrimary}>{race.title}</AppText>
                <AppText variant="p3" style={{ marginTop: 4 }}>{race.subtitle}</AppText>
              </View>
              <View style={[styles.raceStatus,]}>
                <View style={[styles.raceStatusDot, { backgroundColor: race.statusColor }]} />
                <AppText fontSize={11} fontFamily="ManropeBold" color={race.statusColor}>{race.status}</AppText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Screen>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    paddingBottom: SPACING.huge,
  },
  videoCard: {
    backgroundColor: '#191919',
    borderRadius: RADIUS.xl,
    marginTop: SPACING.lg,
    height: 220,
    justifyContent: 'space-between',
    padding: SPACING.lg,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginRight: SPACING.sm,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  watchersBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  watchersText: {
    color: COLORS.white,
    fontSize: 11,
    fontWeight: '600',
    marginLeft: SPACING.xs,
  },
  centerOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  videoBodyTitle: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  videoFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  footerIconLeft: {
    marginRight: SPACING.md,
  },
  footerTrack: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    overflow: 'hidden',
  },
  footerFill: {
    height: '100%',
    borderRadius: 2,
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: '800',
    marginLeft: SPACING.md,
    marginRight: SPACING.md,
  },
  contentHeader: {
    marginTop: SPACING.xl,
    marginBottom: SPACING.sm,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  sectionTitle: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
  },
  raceCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  raceCardSelected: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(227, 186, 75, 0.08)',
  },
  raceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  raceThumbnail: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    overflow: 'hidden',
  },
  raceInfo: {
    flex: 1,
  },
  raceTitle: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: 15,
  },
  raceSubtitle: {
    color: COLORS.textSecondary,
    marginTop: 4,
    fontSize: 13,
  },
  raceStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 999,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
  },
  raceStatusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: SPACING.xs,
  },
  raceStatusText: {
    fontSize: 11,
    fontWeight: '700',
  },
});
