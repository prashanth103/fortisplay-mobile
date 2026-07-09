import { StyleSheet, Text, View } from 'react-native';

import ResultCircle from './ResultCircle';

import { COLORS } from '@/theme/colors';
import { SPACING } from '@/theme/spacing';

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

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

const styles = StyleSheet.create({

  container: {
    paddingVertical: 18,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#4D3C18',
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    width: 110,
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 18,
  },

  runners: {
    flex: 1,
    flexDirection: 'row',
    gap: 14,
    // justifyContent: 'space-evenly',
  },

});