import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButtonProps {
  title: string;
  handlePress?: () => void;
  buttonClass?: string;
  textClass?: string;
  isLoading?: boolean;
}

const Button = ({
  title,
  handlePress,
  buttonClass,
  textClass,
  isLoading,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full bg-primary-100 p-3 text-center rounded-md ${buttonClass} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-white text-center tracking-widest text-lg font-semibold  ${textClass}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
