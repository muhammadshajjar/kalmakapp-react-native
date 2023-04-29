import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const AuthInput = ({
  placeholder,
  keyboardType,
  icon,
  inputType,
  onGetEnteredText,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGreyBorder,
        paddingVertical: 12,
        marginTop: 13,
      }}
    >
      {icon}

      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={{ flex: 1, marginLeft: 6, fontSize: 15 }}
        secureTextEntry={inputType === "password" ? true : false}
        onChangeText={(text) => onGetEnteredText(text)}
        autoCapitalize="none"
      />
    </View>
  );
};

export default AuthInput;
