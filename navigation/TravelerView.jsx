import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import TravelerWishList from "../screens/TravelerWishList";
import TravelerHome from "../screens/TravelerHome";
import TravelerBooked from "../screens/TravelerBooked";
import TravelerProfile from "../screens/TravelerProfile";
import TravelerInbox from "../screens/TravelerInbox";
import BookingFlow from "./BookingFlow";
import { COLORS } from "../constants";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const TravelerView = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primaryGreen,
        }}
      >
        {/* <Tab.Screen
          name="THome"
          component={TravelerHome}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Home"
          component={BookingFlow}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="TWishlist"
          component={TravelerWishList}
          options={{
            tabBarLabel: "WishList",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="hearto" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TBooked"
          component={TravelerBooked}
          options={{
            tabBarLabel: "Booked",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="book" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TInbox"
          component={TravelerInbox}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="TProfile"
          component={TravelerProfile}
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

export default TravelerView;
