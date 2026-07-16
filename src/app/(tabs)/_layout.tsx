import AppText from '@/components/common/AppText';
import { SPACING } from '@/theme/spacing';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeColors } from '@/hooks/useThemeColors';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

type TabItem = {
  name: string;
  title: string;
  icon?: MaterialIconName;
  customIcon?: boolean;
};

const TAB_ITEMS: TabItem[] = [
  {
    name: 'index',
    title: 'Home',
    icon: 'home-filled',
  },
  {
    name: 'watch',
    title: 'Watch',
    icon: 'visibility',
  },
  {
    name: 'sales',
    title: 'Sales',
    icon: 'trending-up',
  },
  {
    name: 'payouts',
    title: 'Payouts',
    customIcon: true,
  },
  {
    name: 'wallet',
    title: 'Wallet',
    icon: 'account-balance-wallet',
  },
];

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const COLORS = useThemeColors();

  const bottomPadding = insets.bottom + (Platform.OS === 'ios' ? SPACING.md : SPACING.sm);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopWidth: 0,
          height: 64 + bottomPadding,
          paddingTop: SPACING.sm,
          paddingBottom: bottomPadding,
          paddingHorizontal: SPACING.sm,
        },
        tabBarItemStyle: {
          paddingVertical: SPACING.xxs,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? SPACING.xs : SPACING.xxs,
        },
      }}
    >
      {TAB_ITEMS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) =>
              tab.customIcon ? (
                <AppText
                  color={color}
                  fontSize={size}
                  fontFamily="ManropeBold"
                  style={{ paddingBottom: SPACING.xs }}
                >
                  ₱
                </AppText>
              ) : (
                <MaterialIcons
                  name={tab.icon!}
                  color={color}
                  size={size}
                />
              ),
          }}
        />
      ))}
    </Tabs>
  );
}