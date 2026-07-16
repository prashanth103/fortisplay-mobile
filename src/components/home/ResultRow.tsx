import { BORDERS, SPACING } from '@/theme';
import { StyleSheet, View } from 'react-native';
import AppText from '@/components/common/AppText';

import ResultCircle from './ResultCircle';

import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface Runner {
  place: string;
  code: string;
  color: string;
}

interface Props {
  title: string;
  runners: Runner[];
}

export default function ResultRow({
  title,
  runners,
}: Props) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  return (
    <View style={styles.container}>
      <AppText variant="h5" fontFamily="ManropeBold" color={COLORS.primary} style={{ width: 110 }}>
        {title}
      </AppText>

      <View style={styles.runners}>
        {runners.map(item => (
          <ResultCircle
            key={item.place}
            place={item.place}
            code={item.code}
            color={item.color}
          />
        ))}
      </View>
    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({

  container: {
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: BORDERS.ultraThin,
    borderBottomColor: COLORS.resultRowBorder,
    flexDirection: 'row',
    alignItems: 'center',
  },

  runners: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.lg,
  },

});