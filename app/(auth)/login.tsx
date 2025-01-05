import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import Button from "@/components/Button";

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="bg-primary-100 h-full flex flex-col justify-between">
          <View className="min-h-[45vh] text-center flex flex-col justify-center items-center gap-4 py-[119px] px-[66px] w-full">
            <Text className="text-3xl text-center mx-[67px] font-PlayfairDisplay font-semibold color-white-off-white w-[256px]">
              Welcome to {"\n"}Nektaro
            </Text>
            <Text className="text-lg font-OpenSans font-normal text-center color-white-off-white w-[311px]">
              Make every day vibrant with{"\n"}Nektaro's natural goodness.
            </Text>
          </View>
          <View className="bg-white-primary min-h-[457px] h-auto w-full my-30 rounded-tl-[45px] rounded-tr-[45px] pt-[73px] pb-[116px] px-[39px]">
            <View className="flex flex-col gap-5">
              <InputField
                value=""
                placeholder="Email Address"
                onChange={() => {}}
              />

              <InputField value="" placeholder="Password" onChange={() => {}} />
            </View>
            <Text className="text-right mt-3 mb-[22px] text-lg color-grey-300 font-OpenSans">
              <Link href="/forgot-password">Forgot Password?</Link>
            </Text>

            <Button title="Login" handlePress={() => {}} />

            <Text className="text-center text-lg color-grey-300 mt-[22px]">
              Don't have an account?{" "}
              <Link href="/sign-up" className="font-bold underline">
                Register
              </Link>
            </Text>
          </View>
        </View>
        {/* <View style={loginStyles.loginBgContainer}>
          <View style={loginStyles.welcomeContainer}>
            <Text style={loginStyles.welcomeHeader}>
              Welcome to {"\n"} Nektaro
            </Text>
            <Text>Make every day vibrant with Nektaro's natural goodness</Text>
          </View>
          <View style={loginStyles.loginSectionContainer}></View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

// export const loginStyles = StyleSheet.create({
//   loginBgContainer: {
//     backgroundColor: "#068c0a",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "flex-start",
//   },

//   welcomeContainer: {
//     minHeight: 387,
//     paddingTop: 119,
//     paddingBottom: 119,
//     textAlign: "center",
//   },

//   welcomeHeader: {
//     width: 258,
//     marginTop: 0,
//     marginBottom: 65,
//     marginRight: 67,
//     marginLeft: 15,
//     fontFamily: "PlayfairDisplay",
//     fontSize: 32,
//     fontWeight: 600,
//     fontStyle: "normal",
//     lineHeight: 150,
//     textAlign: "center",
//     // color: var(--nectaro-offwhite),
//     color: "#ffffff",
//   },
//   welcomeDescription: {},
//   loginSectionContainer: {
//     width: 390,
//     minHeight: 457,
//     marginTop: 119,
//     // marginBottom: 119,
//     paddingTop: 73,
//     paddingBottom: 116,
//     paddingRight: 39,
//     paddingLeft: 39,
//     borderTopRightRadius: 45,
//     borderTopLeftRadius: 45,
//     // backgroundColor: var(--nectaro-offwhite),
//     backgroundColor: "#ffffff",
//   },
// });
