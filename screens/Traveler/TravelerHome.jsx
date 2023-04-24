import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import HomeHeading from "../../componets/HomeHeading";
import ListingItem from "../../componets/ListingItem";

const TravelerHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCotainer}>
        <View>
          <Text style={styles.userName}>Welcome Zeeshan 👋</Text>
          <View style={{ flexDirection: "row" }}>
            <EvilIcons
              name="location"
              size={24}
              color={COLORS.iconsLightGrey}
            />
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
      <View style={styles.serachContainer}>
        <AntDesign name="search1" size={24} color={COLORS.iconsLightGrey} />
        <TextInput
          style={styles.serachInput}
          placeholder="Search Destination"
        />
        <View style={styles.seperator}></View>
        <TouchableOpacity>
          <AntDesign name="filter" size={28} color={COLORS.primaryGreen} />
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <MaterialIcons
          name="my-location"
          size={24}
          color={COLORS.primaryGreen}
        />
        <Text style={styles.filterText}>Near me</Text>
      </View>
      <HomeHeading
        headingText="Listings"
        btnText="View All"
        navigation={navigation}
      />
      <View style={styles.listings}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ marginRight: 15, width: 210 }}>
            <ListingItem navigation={navigation} />
          </View>
          <View style={{ marginRight: 15, width: 210 }}>
            <ListingItem navigation={navigation} />
          </View>
          <View style={{ marginRight: 15, width: 210 }}>
            <ListingItem navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <HomeHeading headingText="Popular Destination" btnText="View All" />
    </SafeAreaView>
  );
};

export default TravelerHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
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
  serachContainer: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: COLORS.lightFieldsBg,
    padding: 20,
    borderRadius: 39,
    position: "relative",
    justifyContent: "space-between",
  },
  serachInput: {
    flex: 0.9,
    fontFamily: "Montserrat-Light",
    fontSize: 16,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    position: "absolute",
    height: 50,
    right: 60,
    top: 8,
  },
  filterContainer: {
    backgroundColor: COLORS.lightFieldsBg,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 20,
    borderRadius: 22,
  },
  filterText: {
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    marginLeft: 7,
  },
  listings: {
    marginTop: 20,
  },
});
