import { BORDERS, RADIUS, SPACING } from '@/theme';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import AppText from '@/components/common/AppText';

import MaterialIcons from '@react-native-vector-icons/material-icons';

import { useDevice } from '@/hooks/useDevice';

import { RACES } from '@/data/runners';

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
              <AppText
                variant="h5"
                fontFamily="ManropeBold"
                color={active ? COLORS.black : COLORS.textPrimary}
              >
                {race.title}
              </AppText>

              <AppText
                fontFamily="ManropeSemiBold"
                color={active ? COLORS.black : COLORS.textPrimary}
                style={{ marginLeft: SPACING.sm }}
              >
                • {race.time}
              </AppText>
            </View>

            {race.status === 'FINISHED' && (
              <AppText fontFamily="ManropeBold" color={COLORS.finished}>
                ✓ FINISHED
              </AppText>
            )}

            {race.status === 'LIVE' && (
              <AppText fontFamily="ManropeBold" color={COLORS.danger}>
                ● LIVE
              </AppText>
            )}

            {race.status === 'UPCOMING' && (
              <View style={styles.timerRow}>
                <MaterialIcons
                  name="schedule"
                  size={16}
                  color={COLORS.raceSelectorText}
                />
                <AppText fontFamily="ManropeBold" color={COLORS.raceSelectorText}>
                  {race.countdown}
                </AppText>
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
    marginBottom: SPACING.md,
  },

  card: {
    width: 132,
    height: 76,
    padding: SPACING.md,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.surface,
    borderWidth: BORDERS.ultraThin,
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
    marginBottom: SPACING.md,
  },

  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
});