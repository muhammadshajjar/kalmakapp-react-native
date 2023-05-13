import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState, useCallback } from "react";
import { DatePickerModal } from "react-native-paper-dates";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import Lottie from "lottie-react-native";
import SpinnerButton from "react-native-spinner-button";
import { useSelector } from "react-redux";
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../firebase-config";

const BookingDetail = ({ route }) => {
  const { listingId, details } = route?.params;
  const { personalInfo } = useSelector((state) => state.user);
  const [isBooking, setIsBooking] = useState(false);
  const [doneBooking, setDoneBooking] = useState(false);

  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });

  const [modifiedDates, setModifiedDates] = useState({
    start: "",
    end: "",
  });
  const [noOfDays, setNoOfDays] = useState(0);
  const [guests, setGuests] = useState(1);
  const [open, setOpen] = useState(false);

  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const onConfirm = useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);

      const startDateToString = startDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const endDateToStrig = endDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const diffInMs = new Date(startDate) - new Date(endDate);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      setNoOfDays(Math.trunc(Math.abs(diffInDays)));

      setModifiedDates({
        start: startDateToString,
        end: endDateToStrig,
      });

      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );
  const incrementGuestHandler = () => {
    if (guests + 1 > details.guests) {
      Alert.alert(
        "Guests exceed",
        "This listing has hit the maximum guest limit"
      );
      return;
    }
    setGuests((prevGuests) => prevGuests + 1);
  };
  const decrementGuestsHandler = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };

  const bookLisingHandler = async () => {
    const bookingDetails = {
      listingId,
      checkIn: modifiedDates.start,
      checkOut: modifiedDates.end,
      bookedBy: personalInfo,
      totalPrice: noOfDays * guests * details.price,
      bookingTime: new Date().toLocaleDateString(),
    };

    try {
      setIsBooking(true);
      const docRef = doc(db, "users", bookingDetails.bookedBy.uid);
      await updateDoc(docRef, {
        bookings: arrayUnion(bookingDetails),
      });
      setIsBooking(false);
      setDoneBooking(true);
      console.log("data is written succssfull");
    } catch (err) {
      console.log(err);
      setIsBooking(false);
      Alert.alert("Booking Error", err.message);
    }
  };
  return (
    <View style={styles.container}>
      {!doneBooking && (
        <View>
          <View>
            <Text style={styles.headingTxt}>
              Please fill out the details below
            </Text>
            <DatePickerModal
              locale="en"
              mode="range"
              visible={open}
              onDismiss={onDismiss}
              startDate={range.startDate}
              endDate={range.endDate}
              onConfirm={onConfirm}
              validRange={{ startDate: new Date() }}
            />
          </View>
          <View>
            <View style={styles.datesContainer}>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={28}
                color={COLORS.iconsLightGrey}
              />
              <TextInput
                style={styles.input}
                editable="false"
                value={`${
                  modifiedDates.start.length > 0
                    ? modifiedDates.start
                    : "Check-in"
                } -> ${
                  modifiedDates.end.length > 0 ? modifiedDates.end : "Check-out"
                }`}
                onPressIn={() => setOpen(true)}
              />
            </View>
          </View>
          <View style={styles.guestContainer}>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={decrementGuestsHandler}
              >
                <AntDesign
                  name="minus"
                  size={24}
                  color={COLORS.iconsLightGrey}
                />
              </TouchableOpacity>
              <Feather name="user" size={35} color={COLORS.primaryGreen} />
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={incrementGuestHandler}
              >
                <AntDesign
                  name="plus"
                  size={24}
                  color={COLORS.iconsLightGrey}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>{guests} Guests</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.txt}>Total:</Text>
            <Text style={styles.priceTxt}>
              {noOfDays * guests * details.price}$
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <View style={{ width: "60%" }}>
              <SpinnerButton
                indicatorCount={10}
                buttonStyle={styles.buttonStyle}
                isLoading={isBooking}
                onPress={() => bookLisingHandler()}
                spinnerType="WaveIndicator"
              >
                <Text style={styles.buttonText}>Book Now</Text>
              </SpinnerButton>
            </View>
          </View>
        </View>
      )}

      {doneBooking && (
        <Lottie
          source={require("../../assets/animations/donebooking.json")}
          autoPlay
          loop
        />
      )}
    </View>
  );
};

export default BookingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  headingTxt: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
  },
  datesContainer: {
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderColor: COLORS.lightGreyBorder,
    marginVertical: 20,
  },
  input: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    marginLeft: 6,
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
  price: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  priceTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginLeft: 6,
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    padding: 15,
    borderRadius: 12,
    width: "60%",
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    color: "white",
    textAlign: "center",
  },
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
