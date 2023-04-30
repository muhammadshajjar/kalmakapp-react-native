import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";

import { useDispatch } from "react-redux";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";

import ListSpacesItem from "../../../componets/ListSpacesItem";
import { fillStepTwo } from "../../../store/redux/createListing-slice";

import { SPACES } from "../../../data/listingData";

const ListingInfoTwo = ({ navigation }) => {
  const dispatch = useDispatch();

  const selectSpaceHandler = (id) => {
    dispatch(fillStepTwo(id));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>What kind of space do you have?</Text>
        <View style={styles.spacesContainer}>
          <FlatList
            data={SPACES}
            renderItem={({ item }) => (
              <ListSpacesItem name={item.name} icon={item.icon} id={item.id} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
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
  spacesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: 20,
  },
  selectedSpace: {
    borderColor: "blue",
  },
});
