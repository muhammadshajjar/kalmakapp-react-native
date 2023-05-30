import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HostInbox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.heading}>Messages</Text>

        <Text style={styles.feedBackTxt}>
          Chat feature under construction. We're improving for a better
          experience. Thanks for your patience!
        </Text>
        <View style={{ height: 280, marginTop: 80 }}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/images/inboxillustration.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HostInbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
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
