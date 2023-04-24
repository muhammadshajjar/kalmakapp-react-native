import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
import ListInput from "../../../componets/ListInput";
const ListingInfoThree = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Where your place is located?</Text>
        <ListInput label="City" placeholder="Name of city" />
        <ListInput label="Province" placeholder="Name of province" />
        <Text>Pin Location</Text>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-4"
            bPath="Step-2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoThree;

const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
});
