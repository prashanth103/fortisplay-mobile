import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { COLORS } from '@/theme/colors';
import { SPACING } from '@/theme/spacing';

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
            <Text
              style={[
                styles.title,
                active && styles.activeTitle,
              ]}
            >
              {item.title}
            </Text>

            <Text
              style={[
                styles.subtitle,
                active && styles.activeSubtitle,
              ]}
            >
              {item.subtitle}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({

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

  title: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: 16,
  },

  activeTitle: {
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 4,
    color: COLORS.textSecondary,
    fontSize: 12,
  },

  activeSubtitle: {
    color: COLORS.textPrimary,
  },

});