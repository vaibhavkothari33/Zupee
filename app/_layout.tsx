import { Stack } from "expo-router";
import "./globals.css"
// import { useFonts } from "expo-font";
// import { useEffect } from "react";
import * as Sentry from '@sentry/react-native';
// import { useAuthStore } from "@/store/auth.store";
import useAuthStore from "@/store/auth.store";
import { useEffect } from "react";

Sentry.init({
  dsn: 'https://d3bb7b8be134483b91ad39a54bcbc540@o4509639979368448.ingest.us.sentry.io/4509639980351488',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

export default Sentry.wrap(function RootLayout() {
  const { isLoading, fetchAuthenticatedUser } = useAuthStore();
  useEffect(() => {
      fetchAuthenticatedUser();
  }, []);

  if(isLoading){
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
});