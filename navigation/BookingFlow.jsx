import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TravelerHome from "../screens/TravelerHome";
import ListingDetail from "../screens/ListingDetail";
import AllListings from "../screens/AllListings";

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
