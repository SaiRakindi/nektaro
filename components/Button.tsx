import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IButtonProps {
  title: string;
  buttonStyle?: "outline" | "filled";
  handlePress?: () => void;
  buttonClass?: string;
  textClass?: string;
  isLoading?: boolean;
}

const Button = ({
  title,
  buttonStyle = "filled",
  handlePress,
  buttonClass,
  textClass,
  isLoading,
}: IButtonProps) => {
  const isButtonFilled = buttonStyle === "filled";
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full p-3 text-center rounded-md ${
        isButtonFilled
          ? "bg-primary-100"
          : "bg-transparent border border-1 border-primary-200"
      } ${buttonClass} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text
        className={`${
          isButtonFilled ? "text-white-primary" : "text-primary-200"
        } text-center tracking-widest text-lg font-semibold  ${textClass}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
