import { View, Text, Image } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View className="w-full h-full bg-primary-100 relative">
      <Image
        source={{ uri: "/assets/images/nektaro-logo.png" }}
        className="h-[89px] w-[89px] z-20"
      />
    </View>
  );
};

export default Splash;
