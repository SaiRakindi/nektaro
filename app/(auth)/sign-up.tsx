import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";

import { StatusBar } from "expo-status-bar";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import HeaderTitle from "@/components/HeaderTitle";
import HeaderDescription from "@/components/HeaderDescription";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View className="flex flex-col h-full justify-center items-center px-10 ">
          <HeaderTitle title="Let's Nourish Naturally" />
          <HeaderDescription />

          <View className="flex flex-col gap-5 mt-[34px] mb-[20px]">
            <InputField
              value={""}
              placeholder="Full name"
              onChange={() => {}}
            />
            <InputField
              value={""}
              placeholder="Phone Number"
              onChange={() => {}}
            />
            <InputField
              value={""}
              placeholder="Email Address"
              onChange={() => {}}
            />
            <InputField value={""} placeholder="Password" onChange={() => {}} />
          </View>

          <Text className="text-sm font-normal text-center">
            By <Text className="font-bold">Registering.</Text> you have agreed
            to these {"\n"}
            <Text className="font-bold">Terms and conditions</Text>
          </Text>
          <Button
            title="Signup"
            handlePress={() => {}}
            buttonClass="w-full mt-[22px] rounded-md"
          />

          <Text className="text-lg font-normal tracking-normal text-center color-grey-300 mt-[22px] ">
            Already have an account?{" "}
            <Link href="/login" className="font-bold underline">
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;
