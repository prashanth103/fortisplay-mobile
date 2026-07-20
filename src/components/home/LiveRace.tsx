import { BORDERS, RADIUS, SHADOWS, SPACING, TYPOGRAPHY } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import { useDevice } from '@/hooks/useDevice';

import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface Props {
  raceName: string;
  onWatchLive?: () => void;
}

export default function LiveRace({
  raceName,
  onWatchLive,
}: Props) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const { isTablet } = useDevice();

  return (
    <View
      style={[
        styles.container,
        isTablet && styles.containerTablet,
      ]}
    >

      <View style={styles.badge}>

        <View style={styles.dot} />

        <AppText color={COLORS.liveRaceText}>
          LIVE NOW
        </AppText>

      </View>

      <View
        style={[
          styles.iconContainer,
          isTablet && styles.iconContainerTablet,
        ]}
      >
        <MaterialIcons
          name="lock-outline"
          size={isTablet ? 52 : 42}
          color={COLORS.iconGrey}
        />
      </View>

      <AppText color={COLORS.textPrimary} style={{ marginTop: SPACING.xxl }}>
        Bets Closed
      </AppText>

      <AppText color={COLORS.textSecondary} style={{ marginTop: SPACING.md, textAlign: "center", lineHeight: isTablet ? 28 : 24 }}>
        Betting for {raceName} is now closed.
        {'\n'}
        The race is underway — watch it live.
      </AppText>

      <Button
        title="Watch Live"
        variant="danger"
        style={[
          styles.button,
          isTablet && styles.buttonTablet,
        ]}
        onPress={onWatchLive}
        leftIcon={(
          <MaterialIcons
            name="videocam"
            size={20}
            color={COLORS.white}
          />
        )}
      />

    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    flex: 1,
    marginTop: SPACING.md,
    borderRadius: RADIUS.xl,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
    borderTopColor: COLORS.danger,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },

  containerTablet: {
    paddingHorizontal: SPACING.huge,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    height: 34,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.liveRaceBackground,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.liveRaceBorder,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: RADIUS.xs,
    backgroundColor: COLORS.danger,
    marginRight: SPACING.sm,
  },

  badgeText: {
    color: COLORS.liveRaceText,

  },

  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surfaceSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.xxxl,
  },

  iconContainerTablet: {
    width: 92,
    height: 92,
    borderRadius: RADIUS.full,
  },

  title: {
    marginTop: SPACING.xxl,
    color: COLORS.textPrimary,

  },

  titleTablet: {

  },

  description: {
    marginTop: SPACING.md,
    color: COLORS.textSecondary,

    textAlign: 'center',
    lineHeight: 24,
  },

  descriptionTablet: {

    lineHeight: 28,
  },

  button: {
    marginTop: SPACING.huge,
    width: 180,
    height: 54,
    borderRadius: RADIUS.lg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.md,
    ...SHADOWS.buttonDanger,
  },

  buttonTablet: {
    width: 220,
    height: 60,
  },

});
