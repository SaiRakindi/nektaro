import { View, Text } from "react-native";
import React from "react";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <Text className="font-semibold text-center color-primary-200 text-3xl tracking-normal">
      {title}
    </Text>
  );
};

export default HeaderTitle;
