import React from "react";

import { Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TravelerHome from "../screens/Traveler/TravelerHome";
import ListingDetail from "../screens/Traveler/ListingDetail";
import AllListings from "../screens/Traveler/AllListings";
import BookingDetail from "../screens/Traveler/BookingDetails";

const Stack = createNativeStackNavigator();
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import FilteredListings from "../screens/Traveler/FilteredListings";

const BookingFlow = ({ navigation, route }) => {
  const tabHiddenRoutes = ["ListingDetail", "AllListings", "BookingDetail"];
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

      <Stack.Screen
        name="AllListings"
        component={AllListings}
        options={{
          headerTitle: "All Listings",
        }}
      />
      <Stack.Screen
        name="ListingDetail"
        component={ListingDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FilterListings"
        component={FilteredListings}
        options={{
          headerTitle: "Search Results",
        }}
      />
      <Stack.Screen
        name="BookingDetail"
        component={BookingDetail}
        options={{
          title: "Booking Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default BookingFlow;
