import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View></View>
        <View style={loginStyles.loginBgContainer}>
          <View style={loginStyles.welcomeContainer}>
            <Text style={loginStyles.welcomeHeader}>
              Welcome to {"\n"} Nektaro
            </Text>
            <Text>Make every day vibrant with Nektaro's natural goodness</Text>
          </View>
          <View style={loginStyles.loginSectionContainer}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

export const loginStyles = StyleSheet.create({
  loginBgContainer: {
    backgroundColor: "#068c0a",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  welcomeContainer: {
    minHeight: 387,
    paddingTop: 119,
    paddingBottom: 119,
    textAlign: "center",
  },

  welcomeHeader: {
    width: 258,
    height: 86,
    marginTop: 0,
    marginBottom: 65,
    marginRight: 67,
    marginLeft: 15,
    fontFamily: "PlayfairDisplay",
    fontSize: 32,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 150,
    textAlign: "center",
    // color: var(--nectaro-offwhite),
    color: "#ffffff",
  },
  welcomeDescription: {},
  loginSectionContainer: {
    width: 390,
    minHeight: 457,
    marginTop: 119,
    // marginBottom: 119,
    paddingTop: 73,
    paddingBottom: 116,
    paddingRight: 39,
    paddingLeft: 39,
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
    // backgroundColor: var(--nectaro-offwhite),
    backgroundColor: "#ffffff",
  },
});
