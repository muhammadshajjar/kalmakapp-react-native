import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ProfileHeader from "../../componets/ProfileHeader";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import { useDispatch } from "react-redux";
import { resetState } from "../../store/redux/user-slice";
import { resetAllListings } from "../../store/redux/allListings-slice";

const TravelerProfile = () => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(resetState());
    authCtx.logout();
    dispatch(resetAllListings());
  };
  return (
    <>
      <ProfileHeader userName="Zeeshan Hero" mode="host" />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Settings</Text>
        <View>
          <TouchableOpacity style={styles.settingList}>
            <Text style={styles.settingListTxt}>Prefereces</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingList}>
            <Text style={styles.settingListTxt}>Account</Text>

            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingList} onPress={logoutHandler}>
            <Text style={styles.settingListTxt}>Logout</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TravelerProfile;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 30,
  },
  heading: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
  },
  settingList: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: COLORS.lightGreyBorder,
  },
  settingListTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
});
