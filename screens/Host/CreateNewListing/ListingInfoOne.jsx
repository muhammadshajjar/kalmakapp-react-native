import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

const ListingInfoOne = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>ListingInfoOne</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Step-2")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListingInfoOne;
