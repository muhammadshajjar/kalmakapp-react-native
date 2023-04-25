import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import HostProfile from "../screens/Host/HostProfile";
import ManageListings from "../screens/Host/ManageListings";
import CreateNewListingFlow from "./CreateNewListingFlow";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const HostProfileFlow = ({ navigation, route }) => {
  const tabHiddenRoutes = ["ManageListing", "CreateNewListing"];
  React.useLayoutEffect(() => {
    if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={HostProfile}
        options={{
          title: "Host Profile",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageListing"
        component={ManageListings}
        options={{
          title: "Manage Listing",
        }}
      />
      <Stack.Screen
        name="CreateNewListing"
        component={CreateNewListingFlow}
        options={{
          title: "Create New Listing",
        }}
      />
    </Stack.Navigator>
  );
};

export default HostProfileFlow;
