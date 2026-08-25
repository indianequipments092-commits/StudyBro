import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { BackHandler } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const subscription = BackHandler.addEventListener("hardwareBackPress", () => {
      if (router.canGoBack()) {
        router.back();
      }
      return true;
    });

    return () => subscription.remove();
  }, [router]);

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
  );
}
