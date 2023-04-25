import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
const GreetingHeader = ({ userName }) => {
  return (
    <View style={styles.headerCotainer}>
      <View>
        <Text style={styles.userName}>Welcome {userName} 👋</Text>
        <View style={{ flexDirection: "row" }}>
          <EvilIcons name="location" size={24} color={COLORS.iconsLightGrey} />
          <Text style={styles.locationText}>Rawalpindi,Pakistan</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={COLORS.iconsLightGrey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default GreetingHeader;

const styles = StyleSheet.create({
  headerCotainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  userName: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  locationText: {
    fontFamily: "Montserrat-Light",
    fontSize: 16,
  },
});
