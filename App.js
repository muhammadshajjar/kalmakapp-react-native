import React, { useContext, useEffect } from "react";

import { ActivityIndicator, View } from "react-native";
import AuthStack from "./navigation/AuthStack";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import TravelerFlow from "./navigation/TravelerFlow";
import HostFlow from "./navigation/HostFlow";

import AuthContextProvider from "./store/auth-context";

import { AuthContext } from "./store/auth-context";
import { Provider, useDispatch, useSelector } from "react-redux";

import { store } from "./store/redux/store";
import { fetchUser } from "./store/redux/user-actions";

import Toast from "react-native-toast-message";
import { enGB, registerTranslation } from "react-native-paper-dates";

registerTranslation("en-GB", enGB);

let initialState = true;
const Navigation = () => {
  const authCtx = useContext(AuthContext);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchUser(authCtx?.token));
  }, [authCtx?.token]);

  let flowToShow; //their are two flows one for host and one for travelers show the screen according to the user

  if (ui.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#89B374" />
      </View>
    );
  } else {
    if (authCtx.mode === "traveler") {
      flowToShow = <TravelerFlow />;
    } else {
      flowToShow = <HostFlow />;
    }
  }
  return (
    <>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && flowToShow}
    </>
  );
};

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

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Navigation />
        <Toast />
      </AuthContextProvider>
    </Provider>
  );
}
