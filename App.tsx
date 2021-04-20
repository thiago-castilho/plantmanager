import React from "react";
import { Text, View } from "react-native";
import AppLoading from 'expo-app-loading';

import { UserIdentification } from "./src/pages/UserIdentification";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading /> // Garante o carregamento das fontes, exibindo a tela de splash

  return (
    <UserIdentification />
  );
}
