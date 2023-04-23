import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import SocialMediaAuth from "../componets/SocialMediaAuth";
import AuthInput from "../componets/AuthInput";
import AuthButton from "../componets/AuthButton";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={{ width: "100%" }}
          source={require("../assets/images/bg-illustration.png")}
        />
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Montserrat-SemiBold",
              marginBottom: 20,
            }}
          >
            Sign up
          </Text>
          <SocialMediaAuth />
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontFamily: "Montserrat-Regular",
              color: COLORS.lightGrey,
              marginVertical: 20,
            }}
          >
            Or, register with email...
          </Text>

          <AuthInput
            placeholder="Full Name"
            icon={
              <AntDesign
                name="user"
                size={20}
                color="#666"
                keyboardType="default"
              />
            }
          />
          <AuthInput
            placeholder="Email"
            icon={
              <MaterialIcons name="alternate-email" size={20} color="#666" />
            }
            keyboardType="email-address"
          />

          <AuthInput
            placeholder="Password"
            icon={
              <Ionicons name="ios-lock-closed-outline" size={20} color="#666" />
            }
            keyboardType="email-address"
            inputType="password"
          />
          <AuthButton label={"Signup"} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginVertical: 20,
                fontSize: 16,
                fontFamily: "Montserrat-Regular",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  color: COLORS.primaryGreen,
                  marginLeft: 4,
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
