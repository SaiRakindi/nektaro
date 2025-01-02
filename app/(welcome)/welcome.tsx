import { View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "@/components/WelcomeScreen";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <WelcomeScreen
          welcomeTitle="Earn Rewards"
          welcomeDescription="Experience the fresh taste of nature. Dive into our world of healthy, natural juices, smoothies, and more!"
          ctaButtonText="Start"
          ctaButtonUrl={`/welcome-rewards`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
