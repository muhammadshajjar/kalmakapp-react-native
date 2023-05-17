import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import SocialMediaAuth from "../componets/SocialMediaAuth";
import AuthInput from "../componets/AuthInput";
import AuthButton from "../componets/AuthButton";

import { db, auth } from "../firebase-config";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfileInfo } from "../store/redux/user-slice";
import { generateUserName } from "../helper/generateUserName";

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const getEmailHandler = (text) => {
    setEmail(text);
  };
  const getPasswordHandler = (text) => {
    setPassword(text);
  };

  const getFullNameHandler = (text) => {
    setFullName(text);
  };

  const signUpHandler = async () => {
    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", user.uid), {
        bookings: [],
        orders: [],
        listings: [],
        personalInfo: {
          userName: generateUserName(email),
          email: email,
          uid: user.uid,
        },
      });

      setIsLoading(false);
      Alert.alert("Account created successfully", "Login to continue", [
        { text: "Login", onPress: () => navigation.goBack() },
      ]);
    } catch (err) {
      setIsLoading(false);
      Alert.alert("Authentication Failed", err.message);
    }
  };
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
            onGetEnteredText={getFullNameHandler}
          />
          <AuthInput
            placeholder="Email"
            icon={
              <MaterialIcons name="alternate-email" size={20} color="#666" />
            }
            keyboardType="email-address"
            onGetEnteredText={getEmailHandler}
          />

          <AuthInput
            placeholder="Password"
            icon={
              <Ionicons name="ios-lock-closed-outline" size={20} color="#666" />
            }
            keyboardType="email-address"
            inputType="password"
            onGetEnteredText={getPasswordHandler}
          />
          <AuthButton
            label={"Signup"}
            onAuthenticate={signUpHandler}
            isLoading={isLoading}
          />
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
