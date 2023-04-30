import {
  BackHandler,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { fillStepTwo } from "../store/redux/createListing-slice";

const ListSpacesItem = ({ name, icon, id }) => {
  const createListing = useSelector((state) => state.createListing);
  const dispatch = useDispatch();

  // dispatch(fillStepTwo(id));
  return (
    <TouchableOpacity
      style={[
        styles.container,
        createListing.createListingForm.stepTwo === id ? styles.selected : "",
      ]}
      onPress={() => dispatch(fillStepTwo(id))}
    >
      {icon}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ListSpacesItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
    width: 160,
    height: 130,
    justifyContent: "center",
    borderRadius: 5,
  },

  text: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 10,
  },
  selected: {
    borderColor: "blue",
  },
});
