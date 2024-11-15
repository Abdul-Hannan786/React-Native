import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import HelloWorld from "@/components/HelloWorld";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <>
      <HelloWorld />
    </>
  );
}
