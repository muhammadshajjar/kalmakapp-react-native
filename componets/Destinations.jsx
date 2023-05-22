import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

import { DESTINATIONS } from "../data/PopularDestinations";

const Destinations = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DESTINATIONS}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={item.image} />
            </View>
            <Text style={styles.txt}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Destinations;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    alignSelf: "flex-start",
    alignItems: "center",
    marginRight: 50,
  },
  imageContainer: {
    height: 70,
    width: 70,
  },
  img: { height: "100%", width: "100%", borderRadius: 50 },
  txt: {
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    marginTop: 10,
  },
});
