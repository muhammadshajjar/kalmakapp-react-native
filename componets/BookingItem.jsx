import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const BookingItem = ({ item, onCancel, canceling, canceledId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/listingimage.png")}
        />
      </View>
      <View style={{ padding: 10 }}>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Check In:</Text>
          </View>
          <Text style={styles.txt}>{item.checkIn}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Check Out:</Text>
          </View>
          <Text style={styles.txt}>{item.checkOut}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Guests:</Text>
          </View>
          <Text style={styles.txt}>{item.noOfGuests}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Price:</Text>
          </View>
          <Text style={styles.txt}>{item.totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onCancel(item.bookingId)}
        >
          <Text style={styles.buttonText}>
            {canceling && canceledId === item.bookingId
              ? "Canceling..."
              : "Cancel"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 12,
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
  },
  imageContainer: {
    width: "40%",
    height: 130,
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  titleContainer: {
    width: 100,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  txt: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },
  buttonStyle: {
    alignSelf: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 11,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    letterSpacing: 1,
    color: "#fff",
  },
});
