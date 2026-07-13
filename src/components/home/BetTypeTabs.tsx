import { useState } from 'react';
import AppText from '@/components/common/AppText';
import { Pressable, StyleSheet, View } from 'react-native';
import { SPACING } from '@/theme/spacing';
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
              fontFamily="ManropeBold"
              fontSize={16}
              color={active ? COLORS.primary : COLORS.textPrimary}
            >
              {item.title}
            </AppText>

            <AppText
              fontFamily="ManropeRegular"
              fontSize={12}
              color={active ? COLORS.textPrimary : COLORS.textSecondary}
              style={{ marginTop: 4 }}
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
    backgroundColor: COLORS.surface,
    borderTopWidth: 2,
    borderBottomWidth: 1,
    borderTopColor: COLORS.primary,
    borderColor: COLORS.border,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    marginTop: SPACING.md,
  },

  item: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },

  activeItem: {
    backgroundColor: "#3B3323",
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
  },

});