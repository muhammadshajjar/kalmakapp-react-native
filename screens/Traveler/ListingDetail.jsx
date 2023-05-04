import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FACILITIES } from "../../data/listingData";
import FacilityItem from "../../componets/FacilityItem";
const ListingDetail = ({ route, navigation }) => {
  const [selectedListing, setSelectedListing] = useState({});
  const [selectedFacilites, setSelectedFacilites] = useState([]);
  const { id } = route.params;
  const { allListings } = useSelector((state) => state.allListing);

  useEffect(() => {
    const [filteredListing] = allListings.filter(
      (listItem) => listItem.listingId === id
    );
    console.log(filteredListing);
    setSelectedListing(filteredListing);

    const thisLisitingFacilities = filteredListing?.listingForm?.stepFour;
    const filterdFacilites = FACILITIES.filter((facility) =>
      thisLisitingFacilities.includes(facility.id)
    );
    setSelectedFacilites(filterdFacilites);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/dummyimage.jpg")}
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actions}
          onPress={() => navigation.navigate("AllListings")}
        >
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color={COLORS.iconsLightGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actions}>
          <Ionicons
            name="heart-outline"
            size={25}
            color={COLORS.iconsLightGrey}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.sperator}></View>
        <View style={styles.basicInfo}>
          <Text style={styles.title}>
            {selectedListing?.listingForm?.stepOne?.name}
          </Text>
          <View style={styles.rowFlex}>
            <AntDesign name="star" size={24} color="gold" />
            <Text style={styles.ratingTxt}>4.5(1k)</Text>
          </View>
        </View>

        <View style={[styles.rowFlex, { justifyContent: "space-between" }]}>
          <View>
            <View style={[styles.rowFlex, { marginBottom: 6 }]}>
              <EvilIcons
                name="location"
                size={27}
                color={COLORS.iconsLightGrey}
              />
              <Text style={styles.detailsTxt}>
                {selectedListing?.listingForm?.stepThree?.city},
                {selectedListing?.listingForm?.stepThree?.province}
              </Text>
            </View>
            <View style={styles.rowFlex}>
              <EvilIcons name="user" size={24} color={COLORS.iconsLightGrey} />
              <Text style={styles.detailsTxt}>
                {selectedListing?.personalInfo?.userName}
              </Text>
            </View>
          </View>
          <View style={styles.rowFlex}>
            <MaterialCommunityIcons
              name="map-marker-radius-outline"
              size={27}
              color={COLORS.primaryGreen}
            />
            <TouchableOpacity>
              <Text style={styles.mapTxt}>Map Direction </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailsSperator}></View>
        <Text style={styles.headingTxt}>Facilities</Text>

        <View>
          <FlatList
            data={selectedFacilites}
            renderItem={({ item }) => <FacilityItem item={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            ListEmptyComponent={<Text>No Facilities Available</Text>}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={styles.headingTxt}>Discription</Text>

        <ScrollView>
          <Text style={styles.descriptionTxt}>
            {selectedListing?.listingForm?.stepOne?.description}
          </Text>
          <Text style={styles.headingTxt}>Guests</Text>
          <Text style={styles.guestTxt}>
            {selectedListing?.listingForm?.stepFive?.guests}
          </Text>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.regularTxt}>Price</Text>
          <Text
            style={{
              fontFamily: "Montserrat-Bold",
              fontSize: 20,
              color: COLORS.primaryGreen,
            }}
          >
            {selectedListing?.listingForm?.stepFive?.price}$ /
            <Text style={[styles.regularTxt, { color: "black" }]}>night</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Reserve now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListingDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: "50%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    top: 50,
    width: "100%",
  },
  actions: {
    height: 45,
    width: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  sperator: {
    height: 4,
    backgroundColor: COLORS.lightGreyBorder,
    width: 50,
    alignSelf: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    marginTop: -55,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  basicInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Bold",
  },
  ratingTxt: {
    fontSize: 14,
    fontFamily: "Montserrat-Light",
  },
  rowFlex: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailsSperator: {
    height: 2,
    width: "100%",
    backgroundColor: "#D9D9D9",
    marginTop: 22,
  },
  detailsTxt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  mapTxt: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    color: COLORS.primaryGreen,
  },
  descriptionTxt: {
    fontSize: 17,
    fontFamily: "Montserrat-Regular",
  },
  headingTxt: {
    fontSize: 19,
    fontFamily: "Montserrat-SemiBold",
    marginVertical: 10,
  },
  guestTxt: {
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: COLORS.lightGreyBorder,
    backgroundColor: "white",
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  regularTxt: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  btn: {
    backgroundColor: COLORS.primaryGreen,
    padding: 15,
    borderRadius: 12,
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
});
