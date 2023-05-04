import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const FacilityItem = ({ item }) => {
  return (
    <View style={[styles.rowFlex, styles.facilityContainer]}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.facilityTxt}>{item.name}</Text>
    </View>
  );
};

export default FacilityItem;

const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  facilityContainer: {
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    marginRight: 11,
  },
  iconContainer: {
    backgroundColor: COLORS.lightFieldsBg,
    padding: 7,
    borderRadius: 10,
  },
  facilityTxt: {
    marginLeft: 8,
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
});
