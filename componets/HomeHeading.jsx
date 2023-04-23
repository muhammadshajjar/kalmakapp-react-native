import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const HomeHeading = ({ headingText, btnText, navigation }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{headingText}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("All Listings")}>
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeading;
const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },
  headingText: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
  },
});
