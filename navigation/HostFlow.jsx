import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HostHome from "../screens/Host/HostHome";
import HostInbox from "../screens/Host/HostInbox";
import HostProfile from "../screens/Host/HostProfile";
import ManageOrders from "../screens/Host/ManageOrders";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import HostProfileFlow from "../navigation/HostProfileFlow";

const HostFlow = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primaryGreen,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HostHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={HostInbox}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ManageOrders"
          component={ManageOrders}
          options={{
            tabBarLabel: "Manage Orders",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="store-cog-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="HProfile"
          component={HostProfileFlow}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HostFlow;
