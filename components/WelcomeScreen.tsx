import { View, Text, Image } from "react-native";
import React from "react";
import WelcomeCard, { IWelcomeCard } from "./WelcomeCard";

const WelcomeScreen = ({
  welcomeTitle,
  welcomeDescription,
  ctaButtonText,
  ctaButtonUrl,
  showBackButton,
}: IWelcomeCard) => {
  return (
    <View className="h-full w-full relative bg-white-primary flex flex-col justify-start">
      <View className="min-h-[70%] bg-primary-300 relative rounded-bl-[20%] rounded-br-[20%] flex flex-col justify-end items-end">
        <View>
          <Image
            source={require("../assets/images/coriander.png")}
            // className=" absolute"
          />
        </View>
      </View>
      <View className="min-h[30%]">
        <WelcomeCard
          welcomeTitle={welcomeTitle}
          welcomeDescription={welcomeDescription}
          ctaButtonText={ctaButtonText}
          ctaButtonUrl={ctaButtonUrl}
          showBackButton={showBackButton}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
