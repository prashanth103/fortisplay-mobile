import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SPACING } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { useDevice } from '@/hooks/useDevice';

import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

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
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
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
              <AppText color={COLORS.black}>
                {code}
              </AppText>
            </View>
          </View>

          <AppText variant='h6' color={COLORS.text} style={{ marginLeft: SPACING.xxl }}>
            {name}
          </AppText>
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
            color={selected ? COLORS.black : COLORS.text}
          />
        </View>
      </View>
    </Pressable>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    backgroundColor: COLORS.bgSurface,
    overflow: 'hidden', // important
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border
  },

  containerSelected: {
    backgroundColor: COLORS.bgSecondary,
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
    height: 74,
  },

  addButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primaryMuted
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  circle: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleTablet: {
    width: 56,
    height: 56,
    borderRadius: RADIUS.full,
  },
  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.xl,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircleTablet: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.xxl,
  },

  code: {
    color: COLORS.black,

  },

  codeTablet: {

  },

  name: {
    marginLeft: SPACING.lg,
    color: COLORS.text,

  },

  nameTablet: {

  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: RADIUS.sm,
    borderWidth: BORDERS.thin,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonTablet: {
    width: 50,
    height: 50,
    borderRadius: RADIUS.md,
  },

});