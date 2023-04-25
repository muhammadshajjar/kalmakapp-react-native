import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ProfileHeader from "../../componets/ProfileHeader";
import { COLORS } from "../../constants";

import { AntDesign } from "@expo/vector-icons";

const HostProfile = ({ navigation }) => {
  return (
    <>
      <ProfileHeader userName="Zeeshan Hero" mode="guest" />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Selling</Text>
        <View>
          <TouchableOpacity style={styles.settingList}>
            <Text style={styles.settingListTxt}>Manage Profile</Text>
            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingList}
            onPress={() => navigation.navigate("ManageListing")}
          >
            <Text style={styles.settingListTxt}>Manage Listing</Text>

            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingList}>
            <Text style={styles.settingListTxt}>Self Reservation</Text>

            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
        </View>

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
          <TouchableOpacity style={styles.settingList}>
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

export default HostProfile;
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
