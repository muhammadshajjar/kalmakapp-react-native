import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import AuthStack from "./navigation/AuthStack";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TravelerFlow from "./navigation/TravelerFlow";
import HostFlow from "./navigation/HostFlow";
import CreateNewListingFlow from "./navigation/CreateNewListingFlow";
import ManageListingFlow from "./navigation/ManageListingFlow";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <TravelerFlow />;
}
