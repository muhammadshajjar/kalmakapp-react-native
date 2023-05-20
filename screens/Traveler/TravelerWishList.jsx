import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import ListingItem from "../../componets/ListingItem";

const TravelerWishList = ({ navigation }) => {
  const { allListings } = useSelector((state) => state.allListing);
  const uid = useSelector((state) => state.user.personalInfo.uid);
  const [myWishList, setMyWishList] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      setMyWishList(
        allListings.filter((listing) => listing.wishListUsers.includes(uid))
      );

      return () => {};
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>WishList</Text>

      {myWishList.length === 0 && (
        <>
          <Text style={styles.feedBackTxt}>
            Oops! It seems there are no Items in WishList at the moment. Please
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
      <FlatList
        data={myWishList}
        renderItem={({ item }) => (
          <ListingItem
            flag={true}
            item={item.listingForm}
            navigation={navigation}
            id={item.listingId}
          />
        )}
        keyExtractor={(item) => item.listingId}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TravelerWishList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 26,
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 20,
  },
  feedBackTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
});
