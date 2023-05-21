import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import ListingItem from "../../componets/ListingItem";
const FilteredListings = ({ route, navigation }) => {
  const { searchDistination, noofguests, priceRange } = route.params;
  const allListings = useSelector((state) => state.allListing.allListings);
  const searchResult = allListings.filter((listing) => {
    const { guests, price } = listing.listingForm.stepFive;
    const { city } = listing.listingForm.stepThree;
    if (
      guests >= noofguests &&
      price <= priceRange &&
      city == searchDistination
    ) {
      return listing;
    }
  });

  return (
    <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: "white" }}>
      {searchResult.length > 0 && (
        <View style={styles.listings}>
          <FlatList
            data={searchResult}
            renderItem={({ item }) => (
              <ListingItem
                flag={true}
                item={item.listingForm}
                id={item.listingId}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.listingId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {searchResult.length === 0 && (
        <>
          <Text style={styles.feedBackTxt}>
            Oops! It seems there are no Search Results at the moment. Please
            check back later.
          </Text>
          <Image
            style={{
              height: 250,
              width: 220,
              alignSelf: "center",
              marginTop: 20,
            }}
            source={require("../../assets/images/nodataillustration.png")}
          />
        </>
      )}
    </View>
  );
};

export default FilteredListings;

const styles = StyleSheet.create({
  listings: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  feedBackTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    marginTop: 20,
  },
});
