import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";

import { FACILITIES } from "../../../data/listingData";
import FacilitiesItem from "../../../componets/FacilitiesItem";

import { fillStepFour } from "../../../store/redux/createListing-slice";
import { useDispatch } from "react-redux";

const ListingInfoFour = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectFacilityHandler = (id) => {
    dispatch(fillStepFour(id));
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          What facilities do you have for campers?
        </Text>

        <FlatList
          data={FACILITIES}
          renderItem={({ item }) => (
            <FacilitiesItem
              name={item.name}
              id={item.id}
              onSelect={selectFacilityHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />

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
});
