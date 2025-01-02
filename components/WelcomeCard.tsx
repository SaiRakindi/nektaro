import { View, Text } from "react-native";
import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderDescription from "./HeaderDescription";
import Button from "./Button";

const WelcomeCard = ({
  showBackButton = false,
}: {
  showBackButton?: boolean;
}) => {
  return (
    <View className="flex flex-1 relative bottom-0 bg-white-primary">
      <HeaderTitle title="Welcome" />
      <HeaderDescription description="Experience the fresh taste of nature. Dive into our world of healthy, natural juices, smoothies, and more!" />

      <Button title="Start" />

      {showBackButton && <Button buttonStyle="outline" title="Back" />}
    </View>
  );
};

export default WelcomeCard;
