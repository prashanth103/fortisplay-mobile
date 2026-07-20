import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SPACING } from '@/theme';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

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
                color={active ? COLORS.black : COLORS.text}
              >
                {race.title}
              </AppText>

              <AppText
                color={active ? COLORS.black : COLORS.text}
                style={{ marginLeft: SPACING.sm }}
              >
                • {race.time}
              </AppText>
            </View>

            {race.status === 'FINISHED' && (
              <AppText color={active ? COLORS.border : COLORS.success}>
                ✓ FINISHED
              </AppText>
            )}

            {race.status === 'LIVE' && (
              <AppText color={active ? COLORS.border : COLORS.danger}>
                ● LIVE
              </AppText>
            )}

            {race.status === 'UPCOMING' && (
              <View style={styles.timerRow}>
                <MaterialIcons
                  name="schedule"
                  size={16}
                  color={active ? COLORS.border : COLORS.primary}
                />
                <AppText color={active ? COLORS.border : COLORS.primary}>
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
    backgroundColor: COLORS.bgSurface,
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