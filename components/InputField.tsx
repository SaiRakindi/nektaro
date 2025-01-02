import { View, Text, TextInput } from "react-native";
import React from "react";

interface ITextInput {
  value: string;
  placeholder: string;
  onChange: () => void;
  textFieldClass?: string;
}

const InputField = ({
  value,
  placeholder,
  onChange,
  textFieldClass,
}: ITextInput) => {
  return (
    <View
      className={`border border-nekgray-200 border-solid rounded-md py-3 px-6 w-full`}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        className={`grey-100 text-lg font-normal text-left ${textFieldClass}`}
      />
    </View>
  );
};

export default InputField;
