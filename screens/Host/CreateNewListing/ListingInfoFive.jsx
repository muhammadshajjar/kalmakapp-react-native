import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
const ListingInfoFive = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>How many guests do you accomodate?</Text>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-6"
            bPath="Step-4"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoFive;
const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
});
