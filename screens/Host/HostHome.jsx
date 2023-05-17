import { Text, View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GreetingHeader from "../../componets/GreetingHeader";
import ListingItem from "../../componets/ListingItem";
import { useSelector } from "react-redux";
const HostHome = () => {
  const allListings = useSelector((state) => state.allListing.allListings);
  const uid = useSelector((state) => state.user.personalInfo.uid);

  const myListings = allListings.filter(
    (listing) => listing.personalInfo.uid === uid
  );

  return (
    <SafeAreaView style={styles.container}>
      <GreetingHeader userName="Zeeshan" />
      <View style={styles.listingContainer}>
        <Text style={styles.title}>My Listings</Text>
        <View style={styles.listings}>
          <FlatList
            data={myListings}
            renderItem={({ item }) => (
              <ListingItem
                flag={true}
                item={item.listingForm}
                // navigation={navigation}
                id={item.listingId}
              />
            )}
            keyExtractor={(item) => item.listingId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HostHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  listingContainer: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 10,
  },
  listings: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
