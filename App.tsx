import React, { useEffect } from "react";
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import Routes from "./src/routes/index";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { PlantProps } from "./src/libs/storage";

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
      }
    );
    return () => subscription.remove();


    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();

    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log(data)
    // }
    // notifications();

  }, [])

  if (!fontsLoaded)
    return <AppLoading /> // Garante o carregamento das fontes, exibindo a tela de splash

  return (
    <Routes />
  );
}
