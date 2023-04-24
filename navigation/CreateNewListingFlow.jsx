import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import ListingInfoOne from "../screens/Host/CreateNewListing/ListingInfoOne";
import ListingInfoTwo from "../screens/Host/CreateNewListing/ListingInfoTwo";
import ListingInfoThree from "../screens/Host/CreateNewListing/ListingInfoThree";
import ListingInfoFour from "../screens/Host/CreateNewListing/ListingInfoFour";
import ListingInfoFive from "../screens/Host/CreateNewListing/ListingInfoFive";
import ListingInfoSix from "../screens/Host/CreateNewListing/ListingInfoSix";

const CreateNewListingFlow = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step-1" component={ListingInfoOne} />
      <Stack.Screen name="Step-2" component={ListingInfoTwo} />
      <Stack.Screen name="Step-3" component={ListingInfoThree} />
      <Stack.Screen name="Step-4" component={ListingInfoFour} />
      <Stack.Screen name="Step-5" component={ListingInfoFive} />
      <Stack.Screen name="Step-6" component={ListingInfoSix} />
    </Stack.Navigator>
  );
};

export default CreateNewListingFlow;
