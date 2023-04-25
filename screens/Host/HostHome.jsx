import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GreetingHeader from "../../componets/GreetingHeader";

const HostHome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GreetingHeader userName="Zeeshan" />
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
});
