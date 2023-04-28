import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
import ListInput from "../../../componets/ListInput";

import { fillStepThree } from "../../../store/redux/createListing-slice";
import { useSelector, useDispatch } from "react-redux";

const ListingInfoThree = ({ navigation }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const getCityHandler = (enteredText) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        city: enteredText,
      };
    });
  };

  const getProvinceHandler = (enteredText) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        province: enteredText,
      };
    });
  };

  const submitFormDataHandler = () => {
    dispatch(fillStepThree(formData));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Where your place is located?</Text>
        <ListInput
          label="City"
          placeholder="Name of city"
          onGetEnteredText={getCityHandler}
          value={formData.city}
        />
        <ListInput
          label="Province"
          placeholder="Name of province"
          onGetEnteredText={getProvinceHandler}
          value={formData.province}
        />
        <Text>Pin Location</Text>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-4"
            bPath="Step-2"
            onGoNext={submitFormDataHandler()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoThree;

const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
});
