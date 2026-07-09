import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '@/components/common/Button';
import { useDevice } from '@/hooks/useDevice';

import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  raceName: string;
  onWatchLive?: () => void;
}

export default function LiveRace({
  raceName,
  onWatchLive,
}: Props) {

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

        <Text style={styles.badgeText}>
          LIVE NOW
        </Text>

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
          color="#8A8A8A"
        />
      </View>

      <Text
        style={[
          styles.title,
          isTablet && styles.titleTablet,
        ]}
      >
        Bets Closed
      </Text>

      <Text
        style={[
          styles.description,
          isTablet && styles.descriptionTablet,
        ]}
      >
        Betting for {raceName} is now closed.
        {'\n'}
        The race is underway — watch it live.
      </Text>

      <Button
        title="Watch Live"
        style={[
          styles.button,
          isTablet && styles.buttonTablet,
        ]}
        textStyle={styles.buttonText}
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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: SPACING.md,
    borderRadius: RADIUS.xl,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderTopColor: COLORS.live,
    backgroundColor: COLORS.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },

  containerTablet: {
    paddingHorizontal: 80,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    height: 34,
    borderRadius: 18,
    backgroundColor: '#351B17',
    borderWidth: 1,
    borderColor: '#7A2A1F',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.live,
    marginRight: 8,
  },

  badgeText: {
    color: '#FF6A55',
    fontWeight: '700',
    fontSize: TYPOGRAPHY.body.size,
  },

  iconContainer: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },

  iconContainerTablet: {
    width: 92,
    height: 92,
    borderRadius: 46,
  },

  title: {
    marginTop: 24,
    color: COLORS.textPrimary,
    fontSize: 32,
    fontWeight: '700',
  },

  titleTablet: {
    fontSize: 38,
  },

  description: {
    marginTop: 12,
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body.size,
    textAlign: 'center',
    lineHeight: 24,
  },

  descriptionTablet: {
    fontSize: TYPOGRAPHY.bodyLarge.size,
    lineHeight: 28,
  },

  button: {
    marginTop: 40,
    width: 180,
    height: 54,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.live,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,

    shadowColor: COLORS.live,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
  },

  buttonTablet: {
    width: 220,
    height: 60,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

});
