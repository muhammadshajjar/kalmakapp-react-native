import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { Entypo } from "@expo/vector-icons";

const ProfileHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}>
            <Entypo name="user" size={24} color={COLORS.iconsLightGrey} />
          </View>
          <Text style={styles.profileTxt}>Zeeshan hero</Text>
        </View>
      </View>
      <View style={styles.modeSwitch}>
        <Text style={styles.modeTxt}>Switch to host mode</Text>
        <TouchableOpacity>
          <Text>change</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryGreen,
    height: 180,
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: COLORS.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  profileTxt: {
    color: "white",
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
    marginLeft: 10,
  },
  modeSwitch: {
    backgroundColor: "#DDDDDD",
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 8,
    marginTop: -25,
  },
  modeTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
  },
});
