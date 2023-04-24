import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";

const ListingInfoTwo = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>What kind of space do you have?</Text>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-3"
            bPath="Step-1"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoTwo;

const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
});
