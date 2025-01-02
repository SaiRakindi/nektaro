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
    <View className="flex flex-1  bottom-0 bg-primary-300 h-full">
      <View className="bg-white-primary px-[33px] pt-[50px] pb-[115px]  bottom-0">
        <HeaderTitle title="Welcome" textAlign="left" />
        <HeaderDescription
          description="Experience the fresh taste of nature. Dive into our world of healthy, natural juices, smoothies, and more!"
          textAlign="left"
        />
        <Button title="Start" buttonClass="mt-9" />
        {showBackButton && <Button buttonStyle="outline" title="Back" />}
      </View>
    </View>
  );
};

export default WelcomeCard;
