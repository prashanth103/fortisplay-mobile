import { RADIUS } from '@/theme/radius';
import { SPACING } from '@/theme/spacing';
import { StyleSheet, View } from 'react-native';
import AppText from '@/components/common/AppText';
import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

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
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  return (
    <View style={styles.container}>
      <AppText variant="p3" fontFamily="ManropeBold" color={COLORS.textPrimary} style={{ marginBottom: SPACING.sm }}>
        {place}
      </AppText>

      <View
        style={[
          styles.outerCircle,
          { backgroundColor: color },
        ]}
      >
        <View style={styles.innerCircle}>
          <AppText variant="p3" fontFamily="ManropeExtraBold" color={COLORS.black}>
            {code}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  outerCircle: {
    width: 46,
    height: 46,
    borderRadius: RADIUS.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },

  innerCircle: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});