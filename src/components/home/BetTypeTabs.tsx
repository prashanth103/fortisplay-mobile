import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SPACING } from '@/theme';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";

const BET_TYPES = [
  {
    title: 'WIN',
    subtitle: 'Finish 1st',
  },
  {
    title: 'Forecast',
    subtitle: 'Top 2',
  },
  {
    title: 'Trifecta',
    subtitle: 'Top 3',
  },
  {
    title: 'Quartet',
    subtitle: 'Top 4',
  },
];

export default function BetTypeTabs() {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      {BET_TYPES.map((item, index) => {
        const active = selected === index;

        return (
          <Pressable
            key={item.title}
            onPress={() => setSelected(index)}
            style={[
              styles.item,
              active && styles.activeItem,
            ]}
          >
            <AppText
              color={active ? COLORS.primary : COLORS.text}
            >
              {item.title}
            </AppText>

            <AppText
              color={active ? COLORS.text : COLORS.textMuted}
              style={{ marginTop: SPACING.xs }}
            >
              {item.subtitle}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgSurface,
    borderTopWidth: BORDERS.thin,
    borderBottomWidth: BORDERS.ultraThin,
    borderTopColor: COLORS.primary,
    borderColor: COLORS.border,
    borderTopRightRadius: RADIUS.md,
    borderTopLeftRadius: RADIUS.md,
  },

  item: {
    flex: 1,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },

  activeItem: {
    backgroundColor: COLORS.primaryMuted,
    borderBottomWidth: BORDERS.medium,
    borderBottomColor: COLORS.primary,
  },

});