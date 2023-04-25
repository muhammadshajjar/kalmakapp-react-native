import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const ListingFormNavigation = ({
  navigation,
  fPath,
  bPath,
  backIsShown = true,
  forwIsShown = true,
  checkIsShown = false,
}) => {
  return (
    <View style={styles.navContainer}>
      {backIsShown && (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate(bPath)}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      )}
      {forwIsShown && (
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate(fPath)}
        >
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableOpacity>
      )}
      {checkIsShown && (
        <TouchableOpacity style={styles.btnContainer} onPress={() => {}}>
          <AntDesign name="check" size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ListingFormNavigation;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    columnGap: 20,
    alignSelf: "flex-end",
  },
  btnContainer: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 50,
  },
});
