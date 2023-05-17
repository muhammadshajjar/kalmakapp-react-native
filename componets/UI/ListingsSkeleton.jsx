import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const ListingsSkeleton = ({ flag = false }) => {
  return (
    <View style={styles.container}>
      <View>
        <ShimmerPlaceholder
          style={{
            height: flag ? 120 : 200,
            width: "100%",
            backgroundColor: "red",
          }}
        />
      </View>
      <View style={styles.content}>
        <ShimmerPlaceholder style={{ width: "45%" }} />
        <ShimmerPlaceholder style={{ width: "45%" }} />
      </View>
      <View style={{ marginTop: 25 }}>
        <ShimmerPlaceholder style={{ width: "100%" }} />
      </View>
    </View>
  );
};
export default ListingsSkeleton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  content: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
