import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TravelerHome from "../screens/Traveler/TravelerHome";
import ListingDetail from "../screens/Traveler/ListingDetail";
import AllListings from "../screens/Traveler/AllListings";

const Stack = createNativeStackNavigator();

const BookingFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="THome"
        options={{ headerShown: false }}
        component={TravelerHome}
      />
      <Stack.Screen name="LDetail" component={ListingDetail} />
      <Stack.Screen name="All Listings" component={AllListings} />
    </Stack.Navigator>
  );
};

export default BookingFlow;
