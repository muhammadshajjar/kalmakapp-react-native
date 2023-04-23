import { View, StyleSheet, Image } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const SocialMediaAuth = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.iconsContainer}>
        <Image source={require("../assets/images/Googlelogo.png")} />
      </View>
      <View style={styles.iconsContainer}>
        <Image source={require("../assets/images/facebooklogo.png")} />
      </View>
      <View style={styles.iconsContainer}>
        <Image source={require("../assets/images/phonelogo.png")} />
      </View>
    </View>
  );
};

export default SocialMediaAuth;

const styles = StyleSheet.create({
  iconsContainer: {
    borderColor: COLORS.lightGreyBorder,
    borderWidth: 1,
    paddingVertical: 11,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
