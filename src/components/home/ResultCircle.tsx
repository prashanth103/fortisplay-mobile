import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '@/theme/colors';
import { TYPOGRAPHY } from '@/theme/typography';

interface Props {
  place: string;
  code: string;
  color: string;
}

export default function ResultCircle({
  place,
  code,
  color,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.place}>
        {place}
      </Text>

      <View
        style={[
          styles.outerCircle,
          { backgroundColor: color },
        ]}
      >
        <View style={styles.innerCircle}>
          <Text style={styles.code}>
            {code}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  place: {
    color: COLORS.textPrimary,
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 8,
  },

  outerCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  code: {
    color: COLORS.black,
    fontWeight: '800',
    fontSize: TYPOGRAPHY.small.size,
  },
});