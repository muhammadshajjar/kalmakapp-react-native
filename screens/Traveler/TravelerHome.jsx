import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import HomeHeading from "../../componets/HomeHeading";
import ListingItem from "../../componets/ListingItem";
import GreetingHeader from "../../componets/GreetingHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllListings } from "../../store/redux/allListings-actions";
import ListingsSkeleton from "../../componets/UI/ListingsSkeleton";
import { Slider } from "@miblanchard/react-native-slider";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Destinations from "../../componets/Destinations";

const TravelerHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [priceRange, setPriceRange] = useState(20);
  const [guests, setGuests] = useState(1);
  const [filters, setFilters] = useState([]);
  const [searchDistination, setSearchDistination] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    dispatch(getAllListings());
  }, []);

  const { isLoading, allListings } = useSelector((state) => state.allListing);
  const submitSearchResultHandler = () => {
    if (searchDistination.length > 0) {
      if (filters.length == 0) {
        Alert.alert("Filters missings", "Please apply filters", [
          {
            text: "Open Filter",
            onPress: () => setModalVisible(true),
          },
        ]);
      } else {
        navigation.navigate("FilterListings", {
          searchDistination,
          noofguests: guests,
          priceRange: priceRange[0],
        });
      }
    } else {
      Alert.alert("Please Enter Destination");
    }
  };
  const incrementGuestHandler = () => {
    setGuests((prevGuests) => prevGuests + 1);
  };
  const decrementGuestsHandler = () => {
    if (guests > 1) {
      setGuests((prevGuests) => prevGuests - 1);
    }
  };
  const doneApplyFilterHandler = () => {
    setModalVisible(false);
    const selectedFilters = [
      { label: "Guests", data: guests },
      { label: "Max Price ", data: Math.trunc(priceRange) },
    ];
    setFilters(selectedFilters);
  };

  const removeFilterTabHandler = (item) => {
    setFilters((prevFilters) =>
      prevFilters.filter((data) => data.label !== item.label)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <GreetingHeader userName="Zeeshan" />

      <View style={styles.serachContainer}>
        <TouchableOpacity onPress={() => submitSearchResultHandler()}>
          <AntDesign name="search1" size={24} color={COLORS.iconsLightGrey} />
        </TouchableOpacity>
        <TextInput
          style={styles.serachInput}
          placeholder="Search Destination"
          onSubmitEditing={submitSearchResultHandler}
          onChangeText={(text) => setSearchDistination(text.toLowerCase())}
          autoComplete={false}
          autoCapitalize={false}
        />
        <View style={styles.seperator}></View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setShowFilters(true);
          }}
        >
          <AntDesign name="filter" size={28} color={COLORS.primaryGreen} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <View style={styles.filterContainer}>
              <Text style={styles.filterText}>
                {item.label} : {item.data}
              </Text>
              <TouchableOpacity onPress={() => removeFilterTabHandler(item)}>
                <Entypo name="cross" size={24} color={COLORS.primaryGreen} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.label}
          horizontal={true}
        />
        {filters.length === 0 && showFilters && (
          <Text style={styles.feedBackTxt}>No filters yet!</Text>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeading
          headingText="Listings"
          btnText="View All"
          navigation={navigation}
        />
        <View style={styles.listings}>
          {isLoading && (
            <FlatList
              data={[1, 1, 1, 1]}
              renderItem={() => (
                <View style={{ marginRight: 15, width: 210 }}>
                  <ListingsSkeleton flag={true} />
                </View>
              )}
              keyExtractor={() => Math.random()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
          {!isLoading && (
            <FlatList
              data={allListings}
              renderItem={({ item }) => (
                <View style={{ marginRight: 15, width: 210 }}>
                  <ListingItem
                    item={item.listingForm}
                    navigation={navigation}
                    id={item.listingId}
                    allData={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.listingId}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          )}
        </View>
        <HomeHeading
          headingText="Popular Destination"
          btnText="View All"
          navigation={navigation}
        />
        <ScrollView>
          <Destinations />
        </ScrollView>
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Apply Filter</Text>

            <View>
              <View style={styles.detailRow}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>No.of guests: </Text>
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
                    <Feather
                      name="user"
                      size={35}
                      color={COLORS.primaryGreen}
                    />
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
              </View>
            </View>
            <View>
              <View style={styles.detailRow}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Price range: </Text>
                </View>
                <View
                  style={{
                    width: 150,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.txt}>20</Text>
                  <View style={{ width: "100%", marginHorizontal: 4 }}>
                    <Slider
                      style={{ width: "100%" }}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                      maximumValue={200}
                      minimumValue={20}
                      thumbTintColor={COLORS.primaryGreen}
                      trackStyle={{
                        backgroundColor: COLORS.lightGrey,
                      }}
                    />
                  </View>

                  <Text style={styles.txt}>{Math.trunc(priceRange)}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => {
                doneApplyFilterHandler();
              }}
            >
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TravelerHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 50,
  },
  serachContainer: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: COLORS.lightFieldsBg,
    padding: 20,
    borderRadius: 39,
    position: "relative",
    justifyContent: "space-between",
  },
  serachInput: {
    flex: 0.9,
    fontFamily: "Montserrat-Light",
    fontSize: 16,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    position: "absolute",
    height: 50,
    right: 60,
    top: 8,
  },
  filterContainer: {
    backgroundColor: COLORS.lightFieldsBg,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 20,
    borderRadius: 22,
    marginRight: 8,
  },
  filterText: {
    fontSize: 18,
    fontFamily: "Montserrat-Regular",
    marginLeft: 7,
  },
  listings: {
    marginTop: 20,
  },
  titleContainer: {
    width: 140,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  modalContainer: {
    flex: 0.4,
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
  modalTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 16,
    letterSpacing: 1,
    color: "#fff",
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  txt: {
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
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

  btnContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  feedBackTxt: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    marginTop: 10,
    color: COLORS.primaryGreen,
  },
});
