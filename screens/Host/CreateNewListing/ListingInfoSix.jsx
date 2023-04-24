import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ListingInfoSix = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoSix</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-5")}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoSix;
