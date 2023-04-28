import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { COLORS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const FacilitiesItem = ({ name, id, onSelect }) => {
  const selectedIds = useSelector(
    (state) => state.createListing.createListingForm.stepFour
  );

  return (
    <View style={styles.checkBoxContainer}>
      <TouchableOpacity style={styles.checkbox} onPress={() => onSelect(id)}>
        {selectedIds.includes(id) && (
          <MaterialIcons name="done" size={20} color={COLORS.iconsLightGrey} />
        )}
      </TouchableOpacity>
      <Text style={styles.checkboxTxt}>{name}</Text>
    </View>
  );
};

export default FacilitiesItem;

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    width: 25,
    justifyContent: "center",
    backgroundColor: COLORS.lightFieldsBg,
  },
  checkboxTxt: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
});
