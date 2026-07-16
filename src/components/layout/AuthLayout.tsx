import { BORDERS, SPACING } from '@/theme';
import { useDevice } from '@/hooks/useDevice';
import AppText from '@/components/common/AppText';
import { useThemeColors } from "@/hooks/useThemeColors";

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: Props) {
  const COLORS = useThemeColors();
  const styles = React.useMemo(() => createStyles(COLORS), [COLORS]);

  const { isTablet } = useDevice();

  return (
    <SafeAreaView
      style={styles.container}
    >
      <View
        style={[
          styles.content,
          isTablet && styles.tabletContent
        ]}
      >
        {children}
      </View>
      <View style={styles.footer}>
        <AppText variant="p3">
          Powered by
          <AppText variant="p3" color={COLORS.textPrimary} fontFamily="ManropeBold">
            {' '}NorthAlley.
          </AppText>
        </AppText>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundSecondary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.xxxl,
  },
  tabletContent: {
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center'
  },
  footer: {
    paddingBottom: SPACING.xxl,
    alignItems: 'center',
    borderTopWidth: BORDERS.thin,
    borderTopColor: COLORS.border,
    paddingTop: SPACING.md,
  },
});