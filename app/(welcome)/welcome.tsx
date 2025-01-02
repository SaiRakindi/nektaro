import { View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeCard from "@/components/WelcomeCard";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <View className="h-full w-full relative bg-white-primary flex flex-col justify-start">
          <View className="min-h-[70%] bg-primary-300 relative rounded-bl-[20%] rounded-br-[20%] flex flex-col justify-end items-end">
            <View>
              <Image
                source={require("../../assets/images/coriander.png")}
                // className=" absolute"
              />
            </View>
          </View>
          <View className="min-h[30%]">
            <WelcomeCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
