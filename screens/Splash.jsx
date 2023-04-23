import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";

const Splash = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/Bg.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Image
          style={{ margin: 15 }}
          source={require("../assets/images/kalmaklogo.png")}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heroText}>
          FIND {"\n"}
          <Text style={styles.heroTextBold}>YOUR NEXT ADVENTURE SPOT</Text>
        </Text>

        <TouchableOpacity
          style={styles.heroBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.heroBtnText}>Explore Now</Text>
          <AntDesign name="arrowright" size={22} color="white" />
        </TouchableOpacity>
        <Text style={styles.privacyText}>Privacy Policy</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 15,
  },
  heroText: {
    fontSize: 48,
    fontFamily: "Montserrat-Regular",
    color: "white",
  },
  heroTextBold: {
    fontFamily: "Montserrat-ExtraBold",
  },
  heroBtn: {
    backgroundColor: COLORS.primaryGreen,
    paddingVertical: 19,
    marginTop: 25,
    marginBottom: 10,
    width: "75%",
    alignSelf: "center",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  heroBtnText: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    color: "white",
    marginRight: 8,
  },
  privacyText: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    color: "white",
    marginBottom: 30,
  },
});
