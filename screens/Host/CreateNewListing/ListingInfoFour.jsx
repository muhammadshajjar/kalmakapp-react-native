import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
const ListingInfoFour = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          What facilities do you have for campers?
        </Text>
        <View style={styles.checkBoxContainer}>
          <Text>Picnic table</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>Campfires</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>Drinking water</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>Pets allowed</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>Toilets</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>Trash cans</Text>
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-5"
            bPath="Step-3"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoFour;

const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  checkboxTxt: {},
});
