import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ManropeRegular: require('../assets/fonts/Manrope-Regular.ttf'),
    ManropeMedium: require('../assets/fonts/Manrope-Medium.ttf'),
    ManropeSemiBold: require('../assets/fonts/Manrope-SemiBold.ttf'),
    ManropeBold: require('../assets/fonts/Manrope-Bold.ttf'),
    ManropeExtraBold: require('../assets/fonts/Manrope-ExtraBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
