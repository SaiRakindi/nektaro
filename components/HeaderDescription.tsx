import { View, Text } from "react-native";
import React from "react";

type DescriptionType = {
  description?: string;
  textAlign?: string;
};

const welcomeText = `Join the movement: a healthier you starts with a simple signup.`;

const HeaderDescription = ({
  description = welcomeText,
  textAlign = "center",
}: DescriptionType) => {
  return (
    <Text
      className={`text-lg font-normal color-primary-100 mt-5 tracking-normal text-${textAlign}`}
    >
      {description}
    </Text>
  );
};

export default HeaderDescription;
