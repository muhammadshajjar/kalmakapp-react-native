import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import TravelerWishList from "../screens/Traveler/TravelerWishList";
import TravelerBookings from "../screens/Traveler/TravelerBookings";
import TravelerProfile from "../screens/Traveler/TravelerProfile";
import TravelerInbox from "../screens/Traveler/TravelerInbox";

import BookingFlow from "./BookingFlow";
import { COLORS } from "../constants";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TravelerFlow = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primaryGreen,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: "absolute",
            borderRadius: 50,
            height: 70,
            paddingTop: 15,
            paddingBottom: 15,
          },
        }}
      >
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
          component={TravelerBookings}
          options={{
            tabBarLabel: "Bookings",
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

export default TravelerFlow;
