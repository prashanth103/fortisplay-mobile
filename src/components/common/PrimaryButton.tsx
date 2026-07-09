
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useDevice } from '@/hooks/useDevice';
import { RADIUS } from '@/theme/radius';
import { TYPOGRAPHY } from '@/theme/typography';
import { useThemeColors } from "@/hooks/useThemeColors";
import * as React from "react";

interface Props {
  title: string;
  onPress: () => void;
}

export default function PrimaryButton({
  title,
  onPress,
}: Props) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
  const { isTablet } = useDevice();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.button,
        isTablet && styles.buttonTablet
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.text,
        isTablet && styles.textTablet
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

}

const createStyles = (COLORS: any) => StyleSheet.create({
  button: {
    height: 54,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.30,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
  buttonTablet: {
    height: 60
  },
  text: {
    color: COLORS.black,
    fontSize: TYPOGRAPHY.bodyLarge.size,
    fontWeight: '700',
  },
  textTablet: {
    fontSize: 20
  }
});