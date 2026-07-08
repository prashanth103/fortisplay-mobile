import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '@/components/common/AppHeader';
import { COLORS } from '@/theme/colors';

interface ScreenProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function Screen({
  children,
  backgroundColor = COLORS.background,
}: ScreenProps) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor },
      ]}
    >
      <AppHeader />

      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});