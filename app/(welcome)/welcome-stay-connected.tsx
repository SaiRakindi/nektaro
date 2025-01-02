import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "@/components/WelcomeScreen";

const WelcomeStayConnected = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <WelcomeScreen
          welcomeTitle="Stay Hydrated"
          welcomeDescription="Never miss out on the latest from Nektaro. Get updates on new arrivals, special offers through the app"
          ctaButtonText="Signup"
          ctaButtonUrl={`/sign-up`}
          showBackButton={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeStayConnected;
