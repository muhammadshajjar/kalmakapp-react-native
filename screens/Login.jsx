import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import SocialMediaAuth from "../componets/SocialMediaAuth";
import AuthButton from "../componets/AuthButton";
import AuthInput from "../componets/AuthInput";
import { AuthContext } from "../store/auth-context";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";

const Login = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getEmailHandler = (text) => {
    setEmail(text);
  };
  const getPasswordHandler = (text) => {
    setPassword(text);
  };

  const loginHandler = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      console.log(response);
      authCtx.authenticate(response?.user?.uid);
    } catch (err) {
      setIsLoading(false);
      Alert.alert("Authentication Failed", err.message);
    }
  };

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

        <TouchableOpacity style={{ alignSelf: "flex-end", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.primaryGreen,
              fontFamily: "Montserrat-SemiBold",
              marginBottom: 25,
            }}
          >
            Forgot?
          </Text>
        </TouchableOpacity>

        <AuthButton
          label="Login"
          onAuthenticate={loginHandler}
          isLoading={isLoading}
        />

        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontFamily: "Montserrat-Regular",
            color: COLORS.lightGrey,
            marginTop: 60,
            marginBottom: 20,
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
