import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import ManageListings from "../screens/Host/ManageListings";
import CreateNewListingFlow from "./CreateNewListingFlow";

const ManageListingFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ManageListing" component={ManageListings} />
        <Stack.Screen
          name="CreateNewListing"
          component={CreateNewListingFlow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ManageListingFlow;
