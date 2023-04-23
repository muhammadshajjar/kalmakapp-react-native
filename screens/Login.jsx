import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import SocialMediaAuth from "../componets/SocialMediaAuth";
import AuthButton from "../componets/AuthButton";
import AuthInput from "../componets/AuthInput";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%" }}
        source={require("../assets/images/bg-illustration.png")}
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Montserrat-SemiBold",
          }}
        >
          Login
        </Text>

        <AuthInput
          placeholder="Eamil"
          icon={<MaterialIcons name="alternate-email" size={20} color="#666" />}
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

        <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.primaryGreen,
              fontFamily: "Montserrat-SemiBold",
            }}
          >
            Forgot?
          </Text>
        </TouchableOpacity>
        <AuthButton label="Login" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-Regular",
            color: COLORS.lightGrey,
            marginVertical: 20,
          }}
        >
          Or, login with...
        </Text>

        <SocialMediaAuth />
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
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                color: COLORS.primaryGreen,
                marginLeft: 4,
                fontSize: 16,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
