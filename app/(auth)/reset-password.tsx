import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { router } from "expo-router";
import HeaderDescription from "@/components/HeaderDescription";
import HeaderTitle from "@/components/HeaderTitle";
import { StatusBar } from "expo-status-bar";

const ResetPassword = () => {
  return (
    <SafeAreaView className="w-full">
      <ScrollView className="h-full">
        <View className="flex flex-col justify-center items-center p-10 mt-[115px]">
          <HeaderTitle title="Reset Password" />
          <HeaderDescription />

          <View className="mt-9">
            <View className="flex flex-col gap-[26px]">
              <InputField value="" placeholder="Password" onChange={() => {}} />

              <InputField
                value=""
                placeholder="Confirm Password"
                onChange={() => {}}
              />
            </View>

            <View className="flex flex-col gap-4 mt-[34px]">
              <Button title={"Reset Password"} buttonStyle="filled" />

              <Button
                title={"Cancel"}
                handlePress={() => router.push("/")}
                buttonStyle="outline"
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#ffffff" style="light" />
    </SafeAreaView>
  );
};

export default ResetPassword;
