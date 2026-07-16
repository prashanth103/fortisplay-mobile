import { StyleSheet, View } from 'react-native';
import AppText from '@/components/common/AppText';

import ResultRow from './ResultRow';

import { RESULT_ROWS } from '@/data/runners';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
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
        <AppText variant="h2" fontFamily="ManropeExtraBold" color={COLORS.textPrimary}>
          {raceName} RESULTS
        </AppText>
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
    borderBottomColor: COLORS.resultRowBorder,
    paddingVertical: SPACING.lg
  },

});