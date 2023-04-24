import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
const CreateListingBtn = ({ navigation, path }) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => navigation.navigate(path)}
    >
      <Ionicons name="md-add-circle-outline" size={24} color="white" />
      <Text style={styles.btnTxt}>create new </Text>
    </TouchableOpacity>
  );
};

export default CreateListingBtn;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  btnTxt: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
});
