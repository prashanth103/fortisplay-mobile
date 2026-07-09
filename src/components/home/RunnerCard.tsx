import MaterialIcons from '@react-native-vector-icons/material-icons';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useDevice } from '@/hooks/useDevice';

import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  code: string;
  name: string;
  color: string;
  selected: boolean;
  onPress: () => void;
}

export default function RunnerCard({
  code,
  name,
  color,
  selected,
  onPress,
}: Props) {
  const { isTablet } = useDevice();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        selected && styles.containerSelected,
        isTablet && styles.containerTablet,
      ]}
    >
      {selected && <View style={styles.selectedIndicator} />}

      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: color,
              },
              isTablet && styles.circleTablet,
            ]}
          >
            <View
              style={[
                styles.innerCircle,
                isTablet && styles.innerCircleTablet,
              ]}
            >
              <Text
                style={[
                  styles.code,
                  isTablet && styles.codeTablet,
                ]}
              >
                {code}
              </Text>
            </View>
          </View>

          <Text
            style={[
              styles.name,
              isTablet && styles.nameTablet,
            ]}
          >
            {name}
          </Text>
        </View>

        <View
          style={[
            styles.addButton,
            selected && styles.addButtonSelected,
            isTablet && styles.addButtonTablet,
          ]}
        >
          <MaterialIcons
            name={selected ? 'check' : 'add'}
            size={isTablet ? 28 : 24}
            color={selected ? COLORS.black : COLORS.white}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 74,
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    overflow: 'hidden', // important
    borderWidth: 1,
    borderColor: COLORS.border
  },

  containerSelected: {
    backgroundColor: '#3B3323',
  },

  selectedIndicator: {
    width: 4,
    backgroundColor: COLORS.primary,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
  },

  containerTablet: {
    height: 86,
  },

  addButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryLight
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleTablet: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  innerCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircleTablet: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  code: {
    color: COLORS.black,
    fontWeight: '800',
    fontSize: TYPOGRAPHY.body.size,
  },

  codeTablet: {
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  name: {
    marginLeft: SPACING.lg,
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: TYPOGRAPHY.bodyLarge.size,
  },

  nameTablet: {
    fontSize: 22,
  },

  addButton: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: '#3B3323',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonTablet: {
    width: 56,
    height: 56,
  },

});