import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";

import { COLORS } from "../constants";

import SpinnerButton from "react-native-spinner-button";

const AuthButton = ({ label, onAuthenticate, isLoading }) => {
  return (
    <SpinnerButton
      indicatorCount={10}
      buttonStyle={styles.buttonStyle}
      isLoading={isLoading}
      onPress={() => onAuthenticate()}
      spinnerType="WaveIndicator"
    >
      <Text style={styles.buttonText}>{label}</Text>
    </SpinnerButton>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 13,
    marginTop: 40,
    height: 60,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    letterSpacing: 1,
    color: "#fff",
  },
});
