import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ListingFormNavigation from "../../../componets/ListingFormNavigation";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import ListInput from "../../../componets/ListInput";
import { fillStepFive } from "../../../store/redux/createListing-slice";
import { useDispatch } from "react-redux";

const ListingInfoFive = ({ navigation }) => {
  const [guests, setGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const incrementGuestHandler = () => {
    setGuests((prevGuests) => prevGuests + 1);
  };
  const decrementGuestsHandler = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };
  const getPriceHandler = (enteredPrice) => {
    setPrice(enteredPrice);
  };
  const submitFormDataHandler = () => {
    dispatch(fillStepFive({ guests: guests, price: price }));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>How many guests do you accomodate?</Text>

        <View style={styles.guestContainer}>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={decrementGuestsHandler}
            >
              <AntDesign name="minus" size={24} color={COLORS.iconsLightGrey} />
            </TouchableOpacity>
            <Feather name="user" size={35} color={COLORS.primaryGreen} />
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={incrementGuestHandler}
            >
              <AntDesign name="plus" size={24} color={COLORS.iconsLightGrey} />
            </TouchableOpacity>
          </View>
          <Text style={styles.txt}>{guests} Guests</Text>
        </View>

        <ListInput
          label="Price"
          placeholder="PKR"
          onGetEnteredText={getPriceHandler}
          keyboardType="numeric"
          value={price}
        />
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <ListingFormNavigation
            navigation={navigation}
            fPath="Step-6"
            bPath="Step-4"
            onGoNext={submitFormDataHandler}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListingInfoFive;
const styles = StyleSheet.create({
  container: { padding: 15, flex: 1 },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 10,
  },
  guestContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 20,
  },
  txt: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  btnContainer: {
    backgroundColor: COLORS.lightFieldsBg,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
