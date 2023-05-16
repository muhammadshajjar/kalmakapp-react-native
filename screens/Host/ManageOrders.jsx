import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getDoc, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../firebase-config";
import OrderItem from "../../componets/OrderItem";
import BookingSkeleton from "../../componets/UI/BookingsSkeleton";
import OrdersSkeleton from "../../componets/UI/OrdersSkeleton";
import { COLORS } from "../../constants";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [myListings, setMyListings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);
  const [canceledId, setCanceledId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const userId = useSelector((state) => state.user.personalInfo.uid);

  useFocusEffect(
    React.useCallback(() => {
      getAllOrders();

      return () => {
        setIsLoading(true);
      };
    }, [])
  );

  const getAllOrders = async () => {
    try {
      const snap = await getDoc(doc(db, "users", userId));
      // console.log(snap.data().listings);
      setOrders(snap.data().orders);
      setMyListings(snap.data().listings[0]);
      setIsLoading(false);
    } catch (err) {
      Alert.alert("Error", "Something went wrong");
      setIsLoading(false);
    }
  };

  const cancelOrderHandler = async (id) => {
    const orderOwnerDoc = doc(db, "users", userId);
    setCanceledId(id);
    const removedItem = orders.find((item) => item.orderId === id);
    const removedBooking = removedItem.details;
    const bookingBy = removedItem.details.bookedBy.uid;
    const bookingOwnerDoc = doc(db, "users", bookingBy);

    try {
      setCanceling(true);
      await updateDoc(orderOwnerDoc, {
        orders: arrayRemove(removedItem),
      });
      await updateDoc(bookingOwnerDoc, {
        //if user cancel the order the order also removed from the user who placed the order
        bookings: arrayRemove(removedBooking),
      });

      const removeOrder = orders.filter((order) => order.orderId !== id);
      setCanceling(false);
      setOrders(removeOrder);
    } catch (err) {
      Alert.alert("Error", "Something went wrong");
      setCanceling(false);
    }
  };

  const modalVisibleHandler = () => {
    setModalVisible(true);
  };
  console.log(myListings);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Manage Orders</Text>
      {orders.length === 0 && !isLoading && (
        <>
          <Text style={styles.feedBackTxt}>
            Oops! It seems there are no Orders at the moment. Please check back
            later.
          </Text>
          <Image
            style={{
              height: 250,
              width: 220,
              alignSelf: "center",
              marginTop: 20,
            }}
            source={require("../../assets/images/nodataillustration.png")}
          />
        </>
      )}
      {isLoading && (
        <FlatList
          data={[1, 1, 1]}
          renderItem={() => <OrdersSkeleton />}
          keyExtractor={() => Math.random()}
        />
      )}
      {!isLoading && (
        <View style={{ flex: 1, marginBottom: 30 }}>
          <FlatList
            data={orders}
            renderItem={({ item }) => (
              <OrderItem
                item={item}
                onCancel={cancelOrderHandler}
                canceling={canceling}
                canceledId={canceledId}
                onShowModal={modalVisibleHandler}
              />
            )}
            keyExtractor={(item) => item.orderId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}

      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Your Listing Detail</Text>

          <View>
            <View style={styles.detailRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Name: </Text>
              </View>
              <Text style={styles.txt}>
                {myListings?.listingForm?.stepOne?.name}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>City: </Text>
              </View>
              <Text style={styles.txt}>
                {myListings?.listingForm?.stepThree?.city}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Province: </Text>
              </View>
              <Text style={styles.txt}>
                {myListings?.listingForm?.stepThree?.province}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Ratings: </Text>
              </View>
              <Text style={styles.txt}>{myListings?.ratings}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ManageOrders;

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
  modalTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 20,
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
  modalContainer: {
    flex: 0.35,
    marginTop: "auto",
    backgroundColor: COLORS.lightFieldsBg,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeBtn: {
    padding: 10,
    backgroundColor: COLORS.primaryGreen,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    letterSpacing: 1,
    color: "#fff",
  },
});
