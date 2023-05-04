import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
const ListingItem = ({ item, flag = false, navigation, id }) => {
  return (
    <View style={styles.listCotainer}>
      <View style={{ height: flag ? 200 : 120 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/images/listingdummyimage.png")}
        />
      </View>
      <View style={styles.listInfoContainer}>
        <View style={styles.listInfo}>
          <View>
            <Text style={styles.locationInfoTitle}>{item?.stepOne?.name}</Text>
            <View style={styles.locationInfo}>
              <EvilIcons
                name="location"
                size={20}
                color={COLORS.iconsLightGrey}
              />
              <Text style={styles.locationInfoDes}>
                {item?.stepThree?.city}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.locationInfoRating}>4.5</Text>
            <AntDesign name="star" size={24} color="gold" />
          </View>
        </View>
        <View style={styles.listFooter}>
          <View style={styles.pricingText}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat-Bold",
                color: COLORS.primaryGreen,
              }}
            >
              ${item?.stepFive?.price}
            </Text>
            <Text style={{ fontSize: 13, fontFamily: "Montserrat-Regular" }}>
              /Night
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ListingDetail", { id })}
          >
            <AntDesign
              name="arrowright"
              size={24}
              color={COLORS.iconsLightGrey}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  listCotainer: {
    borderWidth: 0.5,
    borderColor: COLORS.lightGreyBorder,
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 15,
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
  },
  listInfoContainer: {
    padding: 10,
  },
  listInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 7,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationInfoTitle: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    marginBottom: 4,
  },
  locationInfoRating: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    marginBottom: 4,
  },
  locationInfoDes: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },
  listFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pricingText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
