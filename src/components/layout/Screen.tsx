import { SPACING } from '@/theme';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '@/components/common/AppHeader';

import { useThemeColors } from "@/hooks/useThemeColors";
import React from "react";

interface ScreenProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function Screen({
  children,
  backgroundColor,
}: ScreenProps) {
    const COLORS = useThemeColors();
      const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);
      const finalBg = backgroundColor || COLORS.background;
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        styles.container,
        { backgroundColor: finalBg },
      ]}
    >
      <AppHeader />

      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
});