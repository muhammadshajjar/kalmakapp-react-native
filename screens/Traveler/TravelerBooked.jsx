import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const TravelerBooked = () => {
  const bookings = useSelector((state) => state.user.booking);
  console.log(bookings);
  return (
    <SafeAreaView>
      <Text>TravelerBooked</Text>
    </SafeAreaView>
  );
};

export default TravelerBooked;
