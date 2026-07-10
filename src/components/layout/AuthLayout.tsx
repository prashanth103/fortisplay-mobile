import { useDevice } from '@/hooks/useDevice';
import { useThemeColors } from "@/hooks/useThemeColors";
import { SPACING } from '@/theme/spacing';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children:
  React.ReactNode;
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
        <Text style={styles.footerText}>
          Powered by
          <Text style={styles.brand}>
            {' '}NorthAlley.
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const createStyles = (COLORS: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.backgroundSecondary,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:
      SPACING.xxxl,
  },
  tabletContent: {
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center'
  },
  footer: {
    paddingBottom: 24,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: COLORS.border,
    paddingTop: SPACING.md,
  },
  footerText: {
    color:
      COLORS.textSecondary,
    fontSize: 13,
  },
  brand: {
    color:
      COLORS.textPrimary,
    fontWeight: '700',
  },
});