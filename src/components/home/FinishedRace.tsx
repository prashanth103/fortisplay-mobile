import { StyleSheet, Text, View } from 'react-native';

import ResultRow from './ResultRow';

import { RESULT_ROWS } from '@/data/runners';

import { COLORS } from '@/theme/colors';
import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  raceName: string;
}

export default function FinishedRace({
  raceName,
}: Props) {
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

const styles = StyleSheet.create({

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
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4D3C18',
  },

  headerTitle: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.h3.size,
    fontWeight: '800',
  },

});