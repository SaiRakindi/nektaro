import { View, Text } from "react-native";
import React from "react";
import HeaderTitle from "./HeaderTitle";
import HeaderDescription from "./HeaderDescription";
import Button from "./Button";
import { router } from "expo-router";

export interface IWelcomeCard {
  welcomeTitle: string;
  welcomeDescription: string;
  ctaButtonText: string;
  ctaButtonUrl: any;
  showBackButton?: boolean;
}

const WelcomeCard = ({
  welcomeTitle,
  welcomeDescription,
  ctaButtonText,
  ctaButtonUrl,
  showBackButton = false,
}: IWelcomeCard) => {
  return (
    <View className="flex flex-1  bottom-0 bg-primary-300 h-full">
      <View className="bg-white-primary px-[33px] pt-[50px] pb-[115px]  bottom-0">
        <HeaderTitle title={welcomeTitle} textAlign="left" />
        <HeaderDescription description={welcomeDescription} textAlign="left" />
        <Button
          title={ctaButtonText}
          buttonClass="mt-9"
          handlePress={() => router.push(ctaButtonUrl)}
        />
        {showBackButton && (
          <Button
            buttonStyle="outline"
            title="Back"
            handlePress={() => router.back()}
          />
        )}
      </View>
    </View>
  );
};

export default WelcomeCard;
