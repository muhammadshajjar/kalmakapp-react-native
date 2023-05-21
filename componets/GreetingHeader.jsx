import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useSelector } from "react-redux";
const GreetingHeader = () => {
  const userName = useSelector((state) => state.user.personalInfo.userName);
  const [showNofication, setShowNofication] = useState(false);
  return (
    <>
      <View style={styles.headerCotainer}>
        <View>
          <Text style={styles.userName}>Welcome {userName} 👋</Text>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons
              name="location"
              size={24}
              color={COLORS.iconsLightGrey}
            />
            <Text style={styles.locationText}>Rawalpindi,Pakistan</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setShowNofication((preState) => !preState)}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={COLORS.iconsLightGrey}
          />
        </TouchableOpacity>
      </View>
      {showNofication && (
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTxt}>No nofication yet!</Text>
        </View>
      )}
    </>
  );
};

export default GreetingHeader;

const styles = StyleSheet.create({
  headerCotainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  userName: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
  },
  locationText: {
    fontFamily: "Montserrat-Light",
    fontSize: 16,
  },
  notificationContainer: {
    width: "100%",
    backgroundColor: COLORS.lightFieldsBg,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  notificationTxt: {
    fontSize: 15,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    color: COLORS.primaryGreen,
  },
});
