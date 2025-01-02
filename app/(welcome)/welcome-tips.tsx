import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "@/components/WelcomeScreen";

const WelcomeTips = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <WelcomeScreen
          welcomeTitle="Healthy Living"
          welcomeDescription="Gain insights on living a healthier lifestyle with tips, recipes, and more from our wellness experts"
          ctaButtonText="Next"
          ctaButtonUrl={`/welcome-stay-connected`}
          showBackButton={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeTips;
