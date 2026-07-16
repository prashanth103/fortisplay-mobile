import { StyleSheet, View } from 'react-native';
import AppText from '@/components/common/AppText';

import ResultCircle from './ResultCircle';
import { SPACING } from '@/theme/spacing';
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
    paddingVertical: 18,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.resultRowBorder,
    flexDirection: 'row',
    alignItems: 'center',
  },

  runners: {
    flex: 1,
    flexDirection: 'row',
    gap: 14,
  },

});