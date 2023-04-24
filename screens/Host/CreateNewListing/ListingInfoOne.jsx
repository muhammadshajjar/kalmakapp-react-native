import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../../../constants";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
import ListInput from "../../../componets/ListInput";

const ListingInfoOne = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <ListInput label="Name" placeholder="Name of listing" />
        <View style={styles.field}>
          <Text style={styles.labelTxt}>Description</Text>
          <TextInput
            style={[styles.input, styles.descInput]}
            placeholder="Name of listing"
          />
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-2"
            backIsShown={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoOne;
const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  field: {
    marginTop: 20,
  },
  labelTxt: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 8,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
  descInput: {
    height: 200,
  },
});
