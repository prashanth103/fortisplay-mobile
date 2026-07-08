import Screen from '@/components/layout/Screen';
import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useMemo, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

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
        statusColor: COLORS.live,
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

export default function WatchScreen() {
    const [selectedRaceId, setSelectedRaceId] = useState('kb2');
    const selectedRace = useMemo(
        () => raceData.find(race => race.id === selectedRaceId) ?? raceData[0],
        [selectedRaceId]
    );

    return (
        <Screen backgroundColor={COLORS.background}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.videoCard}>
                    <View style={styles.cardHeader}>
                        <View style={[styles.badge, { backgroundColor: `${selectedRace.statusColor}22` }]}>
                            <View style={[styles.badgeDot, { backgroundColor: selectedRace.statusColor }]} />
                            <Text style={[styles.badgeText, { color: selectedRace.statusColor }]}>{selectedRace.cardLabel}</Text>
                        </View>
                        {selectedRace.watchers ? (
                            <View style={styles.watchersBadge}>
                                <MaterialIcons name="visibility" size={14} color={COLORS.white} />
                                <Text style={styles.watchersText}>{selectedRace.watchers}</Text>
                            </View>
                        ) : null}
                    </View>

                    <View style={styles.videoBody}>
                        <View style={[styles.iconCircle, styles.iconCircleShadow]}>
                            <MaterialIcons
                                name={selectedRace.icon}
                                size={40}
                                color={selectedRace.statusColor}
                            />
                        </View>
                        <Text style={styles.videoBodyTitle}>{selectedRace.videoTitle}</Text>
                        <Text style={styles.videoBodyText}>{selectedRace.cardText}</Text>
                    </View>

                    <View style={styles.videoFooter}>
                        <View style={styles.footerIcon}>
                            <MaterialIcons name="volume-up" size={14} color={COLORS.white} />
                        </View>
                        <View style={styles.footerTrack}>
                            <View
                                style={[
                                    styles.footerFill,
                                    { width: `${selectedRace.progress}%`, backgroundColor: selectedRace.statusColor },
                                ]}
                            />
                        </View>
                        <View style={styles.footerRight}>
                            <Text style={[styles.footerLabel, { color: selectedRace.statusColor }]}>{selectedRace.cardLabel}</Text>
                            <MaterialIcons name="fullscreen" size={18} color={COLORS.white} style={styles.footerIconRight} />
                        </View>
                    </View>
                </View>

                <View style={styles.contentHeader}>
                    <Text style={styles.title}>{selectedRace.title}</Text>
                    <Text style={styles.subtitle}>{selectedRace.subtitle}</Text>
                </View>

                <Text style={styles.sectionTitle}>LIVE & UPCOMING RACES</Text>

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
                                <MaterialIcons name="play-arrow" size={18} color={COLORS.textSecondary} />
                            </View>
                            <View style={styles.raceInfo}>
                                <Text style={styles.raceTitle}>{race.title}</Text>
                                <Text style={styles.raceSubtitle}>{race.subtitle}</Text>
                            </View>
                            <View style={[styles.raceStatus,]}>
                                <View style={[styles.raceStatusDot, { backgroundColor: race.statusColor }]} />
                                <Text style={[styles.raceStatusText, { color: race.statusColor }]}>{race.status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: SPACING.huge,
    },
    videoCard: {
        backgroundColor: COLORS.surfaceElevated,
        borderRadius: RADIUS.xl,
        padding: SPACING.xl,
        marginTop: SPACING.lg,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
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
        paddingHorizontal: SPACING.sm,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: '#222222',
    },
    watchersText: {
        color: COLORS.white,
        fontSize: 12,
        marginLeft: SPACING.sm,
    },
    videoBody: {
        alignItems: 'center',
        paddingVertical: SPACING.xxxl,
        borderRadius: RADIUS.lg,
        backgroundColor: COLORS.backgroundSecondary,
    },
    iconCircle: {
        width: 84,
        height: 84,
        borderRadius: 42,
        borderWidth: 1,
        borderColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    iconCircleShadow: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.16,
        shadowRadius: 16,
        elevation: 4,
    },
    videoBodyTitle: {
        color: COLORS.textSecondary,
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
        marginBottom: SPACING.sm,
    },
    videoBodyText: {
        color: COLORS.textSecondary,
        fontSize: 12,
        textAlign: 'center',
    },
    videoFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SPACING.lg,
    },
    footerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: SPACING.sm,
    },
    footerIconRight: {
        marginLeft: SPACING.sm,
    },
    footerIcon: {
        width: 32,
        height: 32,
        borderRadius: 12,
        backgroundColor: COLORS.border,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SPACING.sm,
    },
    footerTrack: {
        flex: 1,
        height: 4,
        borderRadius: 999,
        backgroundColor: COLORS.border,
        overflow: 'hidden',
    },
    footerFill: {
        height: '100%',
        borderRadius: 999,
    },
    footerLabel: {
        fontSize: 11,
        fontWeight: '700',
        marginLeft: SPACING.sm,
        textTransform: 'uppercase',
    },
    contentHeader: {
        marginTop: SPACING.xl,
        marginBottom: SPACING.sm,
    },
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: '800',
    },
    subtitle: {
        color: COLORS.textSecondary,
        marginTop: 4,
    },
    sectionTitle: {
        color: COLORS.white,
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
    },
    raceInfo: {
        flex: 1,
    },
    raceTitle: {
        color: COLORS.white,
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
