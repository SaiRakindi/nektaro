import { View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "@/components/WelcomeScreen";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <WelcomeScreen
          welcomeTitle="Welcome"
          welcomeDescription="Experience the fresh taste of nature. Dive into our world of healthy, natural juices, smoothies, and more!"
          ctaButtonText="Start"
          ctaButtonUrl={`/welcome-rewards`}
        />
        <Link href="/login">Login</Link>
        <StatusBar backgroundColor="#C9E4CA" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
