import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";
const ListInput = ({
  label,
  placeholder,
  onGetEnteredText,
  keyboardType = "default",
  value,
}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.labelTxt}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => onGetEnteredText(text)}
        keyboardType={keyboardType}
        value={value}
      />
    </View>
  );
};

export default ListInput;

const styles = StyleSheet.create({
  field: {
    marginTop: 20,
  },
  labelTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    marginBottom: 8,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 5,
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
});
