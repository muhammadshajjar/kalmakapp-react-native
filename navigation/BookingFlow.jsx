import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TravelerHome from "../screens/Traveler/TravelerHome";
import ListingDetail from "../screens/Traveler/ListingDetail";
import AllListings from "../screens/Traveler/AllListings";

const Stack = createNativeStackNavigator();
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const BookingFlow = ({ navigation, route }) => {
  const tabHiddenRoutes = ["ListingDetail", "AllListings"];
  React.useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          position: "absolute",
          borderRadius: 50,
          height: 70,
          paddingTop: 15,
          paddingBottom: 15,
        },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="THome"
        options={{
          headerShown: false,
        }}
        component={TravelerHome}
      />
      <Stack.Screen name="ListingDetail" component={ListingDetail} />
      <Stack.Screen
        name="AllListings"
        component={AllListings}
        options={{
          headerTitle: "All Listings",
        }}
      />
    </Stack.Navigator>
  );
};

export default BookingFlow;
