import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const ResetPasswordSuccessful = () => {
  return (
    <SafeAreaView className="h-full w-full">
      <Image
        source={{ uri: "/assets/svg/password-reset-successful-icon.svg" }}
      />{" "}
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default ResetPasswordSuccessful;
