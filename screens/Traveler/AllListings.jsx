import { View, FlatList, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ListingItem from "../../componets/ListingItem";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

// const SkeletonPlaceholderComponent=SkeletonPlaceholder(LinearGradient);
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import ListingsSkeleton from "../../componets/UI/ListingsSkeleton";
import { getAllListings } from "../../store/redux/allListings-actions";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const AllListings = ({ navigation }) => {
  const { isLoading, allListings, visited } = useSelector(
    (state) => state.allListing
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (visited) return;

    dispatch(getAllListings());
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
      {isLoading && (
        <FlatList
          data={[1, 1, 1, 1]}
          renderItem={() => <ListingsSkeleton />}
          keyExtractor={() => Math.random()}
        />
      )}
      {!isLoading && (
        <FlatList
          data={allListings}
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
      )}
    </View>
  );
};

export default AllListings;
