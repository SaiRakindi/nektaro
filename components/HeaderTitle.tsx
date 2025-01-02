import { View, Text } from "react-native";
import React from "react";

const HeaderTitle = ({
  title,
  textAlign = "center",
}: {
  title: string;
  textAlign?: string;
}) => {
  return (
    <Text
      className={`font-semibold text-${textAlign} color-primary-200 text-3xl tracking-normal`}
    >
      {title}
    </Text>
  );
};

export default HeaderTitle;
