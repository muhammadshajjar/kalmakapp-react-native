import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { getAllListings } from "../../store/redux/allListings-actions";

const HostInbox = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("runs");
  //   dispatch(getAllListings());
  // }, []);
  return (
    <SafeAreaView>
      <Text>HostInbox</Text>
    </SafeAreaView>
  );
};

export default HostInbox;
