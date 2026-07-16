import MaterialIcons from '@react-native-vector-icons/material-icons';
import AppText from '@/components/common/AppText';
import { StyleSheet, View } from 'react-native';

import Button from '@/components/common/Button';
import { useDevice } from '@/hooks/useDevice';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';
import { SHADOWS } from '@/theme/shadows';
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

        <AppText fontFamily="ManropeBold" color={COLORS.liveRaceText} fontSize={16}>
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

      <AppText fontFamily="ManropeBold" color={COLORS.textPrimary} fontSize={isTablet ? 38 : 32} style={{ marginTop: SPACING.xxl }}>
        Bets Closed
      </AppText>

      <AppText fontFamily="ManropeRegular" color={COLORS.textSecondary} fontSize={isTablet ? 18 : 16} style={{ marginTop: SPACING.md, textAlign: "center", lineHeight: isTablet ? 28 : 24 }}>
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
    borderWidth: 1,
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
    borderWidth: 1,
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
    fontWeight: '700',
    fontSize: TYPOGRAPHY.body.fontSize,
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
    fontSize: 32,
    fontWeight: '700',
  },

  titleTablet: {
    fontSize: 38,
  },

  description: {
    marginTop: SPACING.md,
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body.fontSize,
    textAlign: 'center',
    lineHeight: 24,
  },

  descriptionTablet: {
    fontSize: TYPOGRAPHY.bodyLarge.fontSize,
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
