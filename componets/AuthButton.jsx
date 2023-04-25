import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const AuthButton = ({ label, onAuthenticate }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primaryGreen,
        borderRadius: 13,
        paddingVertical: 17,
        marginTop: 20,
      }}
      onPress={() => onAuthenticate()}
    >
      <Text style={styles.btnContainer}>{label}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  btnContainer: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    letterSpacing: 1,
    color: "#fff",
  },
});
