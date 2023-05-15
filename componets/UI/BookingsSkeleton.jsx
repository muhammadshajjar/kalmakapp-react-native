import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const BookingSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ShimmerPlaceholder style={{ height: "100%", width: "100%" }} />
      </View>

      <View style={{ padding: 10, width: "60%" }}>
        <ShimmerPlaceholder style={{ marginBottom: 20, width: "100%" }} />

        <ShimmerPlaceholder style={{ marginBottom: 20, width: "100%" }} />

        <ShimmerPlaceholder style={{ marginBottom: 20, width: "100%" }} />

        <View style={{ height: 50, width: 100, alignSelf: "flex-end" }}>
          <ShimmerPlaceholder
            style={{ height: "100%", width: "100%", borderRadius: 10 }}
          />
        </View>
      </View>
    </View>
  );
};
export default BookingSkeleton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 12,
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: "40%",
    height: 130,
  },
});
