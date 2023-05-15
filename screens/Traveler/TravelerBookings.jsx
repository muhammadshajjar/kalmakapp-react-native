import {
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Image,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase-config";
import BookingItem from "../../componets/BookingItem";
import { useFocusEffect } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import BookingSkeleton from "../../componets/UI/BookingsSkeleton";
const TravelerBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);
  const [canceledId, setCanceledId] = useState("");

  const userId = useSelector((state) => state.user.personalInfo.uid);

  useFocusEffect(
    React.useCallback(() => {
      getAllBookings();

      return () => {
        setIsLoading(true);
        setCanceling(false);
      };
    }, [])
  );

  const getAllBookings = async () => {
    const snap = await getDoc(doc(db, "users", userId));
    setBookings(snap.data().bookings);
    setIsLoading(false);
  };

  const cancelBookingHandler = async (id) => {
    const bookingOwnerDoc = doc(db, "users", userId);
    setCanceledId(id);
    const removedItem = bookings.find((item) => item.bookingId === id);

    try {
      setCanceling(true);
      await updateDoc(bookingOwnerDoc, {
        bookings: arrayRemove(removedItem),
      });

      const removeBooking = bookings.filter(
        (booking) => booking.bookingId !== id
      );
      setCanceling(false);
      console.log(removeBooking);
      setBookings(removeBooking);
    } catch (err) {
      Alert.alert("Error", "Something went wrong");
      setCanceling(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Your Bookings</Text>
      {bookings.length === 0 && !isLoading && (
        <>
          <Text style={styles.feedBackTxt}>
            Oops! It seems there are no bookings available at the moment. Please
            check back later.
          </Text>

          {Platform.OS === "ios" && (
            <Lottie
              source={require("../../assets/animations/calendar.json")}
              autoPlay
              loop
            />
          )}
          {Platform.OS === "android" && (
            <Image
              style={{ height: 250, alignSelf: "center" }}
              source={require("../../assets/animations/calendar.gif")}
            />
          )}
        </>
      )}
      {isLoading && (
        <FlatList
          data={[1, 1, 1]}
          renderItem={() => <BookingSkeleton />}
          keyExtractor={() => Math.random()}
        />
      )}

      {!isLoading && (
        <FlatList
          data={bookings}
          renderItem={({ item }) => (
            <BookingItem
              item={item}
              onCancel={cancelBookingHandler}
              canceling={canceling}
              canceledId={canceledId}
            />
          )}
          keyExtractor={(item) => item.bookingId}
        />
      )}
    </SafeAreaView>
  );
};

export default TravelerBookings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
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
