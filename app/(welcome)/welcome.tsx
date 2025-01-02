import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "@/components/HeaderTitle";
import HeaderDescription from "@/components/HeaderDescription";
import Button from "@/components/Button";
import WelcomeCard from "@/components/WelcomeCard";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <View className="h-full w-full bg-primary-300 relative">
          <View>
            <Image source={{ uri: "/assets/images/coriander.png" }} />
          </View>
          <WelcomeCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
