import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

const ProfileHeader = ({ userName, mode }) => {
  const authCtx = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    authCtx.toggleModeHandler();
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImg}>
            <Entypo name="user" size={24} color={COLORS.iconsLightGrey} />
          </View>
          <Text style={styles.profileTxt}>{userName}</Text>
        </View>
      </View>
      <View style={styles.modeSwitch}>
        <Text style={styles.modeTxt}>Switch to {mode} mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={isEnabled ? COLORS.primaryGreen : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
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
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    marginTop: -25,
  },
  modeTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
  },
});
