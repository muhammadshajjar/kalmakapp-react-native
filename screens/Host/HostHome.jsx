import { Text, View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GreetingHeader from "../../componets/GreetingHeader";
import ListingItem from "../../componets/ListingItem";
import { useSelector } from "react-redux";
const HostHome = () => {
  const myListings = useSelector((state) => state.user.listings);
  return (
    <SafeAreaView style={styles.container}>
      <GreetingHeader userName="Zeeshan" />
      <View style={styles.listingContainer}>
        <Text style={styles.title}>My Listings</Text>
        <View style={styles.listings}>
          <FlatList
            data={myListings}
            renderItem={({ item }) => (
              <ListingItem flag={true} item={item.listingForm} />
            )}
            keyExtractor={(item) => Math.random().toString()}
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
