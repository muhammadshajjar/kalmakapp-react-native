import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { EvilIcons } from "@expo/vector-icons";
const OrderItem = ({ item, onCancel, canceling, canceledId, onShowModal }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>OrderBy:</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.details.bookedBy.userName}</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Check In:</Text>
          </View>
          <Text style={styles.txt}>{item.details.checkIn}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Check Out:</Text>
          </View>
          <Text style={styles.txt}>{item.details.checkOut}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Guests:</Text>
          </View>
          <Text style={styles.txt}>{item.details.noOfGuests}</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Price:</Text>
          </View>
          <Text style={styles.txt}>{item.details.totalPrice}$</Text>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Listing:</Text>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => onShowModal()}
          >
            <Text style={[styles.txt, { textDecorationLine: "underline" }]}>
              Open
            </Text>
            <EvilIcons name="external-link" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity>
          <Text style={styles.secondBtnnxt}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => onCancel(item.orderId)}
        >
          <Text style={styles.buttonText}>
            {canceling && canceledId === item.orderId
              ? "Canceling..."
              : "Cancel"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    borderColor: COLORS.lightGreyBorder,
    borderRadius: 12,
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
  actionsContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  secondBtnnxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
    textDecorationLine: "underline",
    marginRight: 10,
  },
});
