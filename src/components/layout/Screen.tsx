import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});