import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const OrdersSkeleton = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder style={{ marginBottom: 25, width: "100%" }} />
      <ShimmerPlaceholder style={{ marginBottom: 25, width: "100%" }} />
      <ShimmerPlaceholder style={{ marginBottom: 25, width: "100%" }} />

      <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
        <ShimmerPlaceholder style={{ height: 20, width: "30%" }} />
        <ShimmerPlaceholder
          style={{ marginLeft: 20, height: 20, width: "30%" }}
        />
      </View>
    </View>
  );
};

export default OrdersSkeleton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
});
