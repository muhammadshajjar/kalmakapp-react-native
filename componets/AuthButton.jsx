import { Text, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const AuthButton = ({ label }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primaryGreen,
        borderRadius: 13,
        paddingVertical: 17,
        marginTop: 20,
      }}
      onPress={() => {
        //clicked to next page
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Montserrat-SemiBold",
          fontSize: 18,
          letterSpacing: 1,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
