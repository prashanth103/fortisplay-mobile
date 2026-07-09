import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-icons';

import { useDevice } from '@/hooks/useDevice';

import { RACES } from '@/data/runners';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';
import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface Props {
  selectedRaceId: number;
  onSelectRace: (id: number) => void;
}

export default function RaceSelector({
  selectedRaceId,
  onSelectRace,
}: Props) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {RACES.map(race => {
        const active = race.id === selectedRaceId;

        return (
          <Pressable
            key={race.id}
            onPress={() => onSelectRace(race.id)}
            style={[
              styles.card,
              active && styles.activeCard,
              isTablet && styles.cardTablet,
            ]}
          >
            <View style={styles.row}>
              <Text
                style={[
                  styles.title,
                  active && styles.activeTitle,
                ]}
              >
                {race.title}
              </Text>

              <Text
                style={[
                  styles.time,
                  active && styles.activeTitle,
                ]}
              >
                • {race.time}
              </Text>
            </View>

            {race.status === 'FINISHED' && (
              <Text style={styles.finished}>
                ✓ FINISHED
              </Text>
            )}

            {race.status === 'LIVE' && (
              <Text style={styles.live}>
                ● LIVE
              </Text>
            )}

            {race.status === 'UPCOMING' && (
              <View style={styles.timerRow}>
                <MaterialIcons
                  name="schedule"
                  size={16}
                  color="#6B5220"
                />
                <Text style={styles.timer}>
                  {race.countdown}
                </Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    paddingTop: SPACING.md,
    gap: SPACING.md,
    marginBottom: 10,
  },

  card: {
    width: 132,
    height: 76,
    padding: SPACING.md,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  cardTablet: {
    width: 180,
    height: 90,
  },

  activeCard: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  activeTitle: {
    color: COLORS.black,
  },

  time: {
    color: COLORS.textPrimary,
    marginLeft: 6,
    fontWeight: '600',
  },

  finished: {
    color: COLORS.finished,
    fontWeight: '700',
  },

  live: {
    color: COLORS.live,
    fontWeight: '700',
  },

  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  timer: {
    color: '#6B5220',
    fontWeight: '700',
  },

});