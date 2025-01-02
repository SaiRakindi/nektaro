import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "@/components/WelcomeScreen";

const WelcomeRewards = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <WelcomeScreen
          welcomeTitle={"Earn Rewards"}
          welcomeDescription="Join our loyalty program to collect points with every purchase and unlock exclusive benefits."
          ctaButtonText="Next"
          ctaButtonUrl="/welcome-tips"
          showBackButton={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeRewards;
