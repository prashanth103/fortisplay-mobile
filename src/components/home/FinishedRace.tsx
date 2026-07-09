import { StyleSheet, Text, View } from 'react-native';

import ResultRow from './ResultRow';

import { RESULT_ROWS } from '@/data/runners';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';
import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface Props {
  raceName: string;
}

export default function FinishedRace({
  raceName,
}: Props) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {raceName} RESULTS
        </Text>
      </View>

      {RESULT_ROWS.map(item => (
        <ResultRow
          key={item.title}
          title={item.title}
          runners={item.runners}
        />
      ))}

    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    marginTop: SPACING.md,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderTopColor: COLORS.finished,
    borderTopWidth: 2,
    borderRadius: RADIUS.xl,
    overflow: 'hidden',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4D3C18',
    paddingVertical: 16
  },

  headerTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h3.size,
    fontWeight: '800',
  },

});