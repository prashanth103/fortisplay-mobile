import AppText from '@/components/common/AppText';
import { BORDERS, RADIUS, SPACING } from '@/theme';
import { StyleSheet, View } from 'react-native';

import ResultRow from './ResultRow';

import { RESULT_ROWS } from '@/data/runners';

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
        <AppText fontFamily="ManropeExtraBold" variant="h4" color={COLORS.text}>
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
    backgroundColor: COLORS.bgSurface,
    borderWidth: BORDERS.ultraThin,
    borderColor: COLORS.border,
    borderTopColor: COLORS.success,
    borderTopWidth: BORDERS.thin,
    borderRadius: RADIUS.xl,
    overflow: 'hidden',
  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: BORDERS.ultraThin,
    borderBottomColor: COLORS.border,
    paddingVertical: SPACING.lg
  },

});