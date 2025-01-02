import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { router } from "expo-router";
import HeaderTitle from "@/components/HeaderTitle";
import HeaderDescription from "@/components/HeaderDescription";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="w-full">
      <ScrollView className="h-full">
        <View className="flex flex-col justify-center items-center p-10 mt-[115px]">
          <Text className="font-semibold text-center color-primary-200 text-3xl tracking-normal">
            Forgot {"\n"}Password?
          </Text>
          <HeaderDescription />

          <View className="mt-9">
            <InputField
              value=""
              placeholder="Registered email"
              onChange={() => {}}
            />

            <View className="flex flex-col gap-4 mt-7">
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
    </SafeAreaView>
  );
};

export default ForgotPassword;
