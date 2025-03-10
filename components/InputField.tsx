import { View, Text, TextInput, Dimensions } from "react-native";
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
      className={`border border-grey-200 px-[23px] border-solid rounded-md h-[49px] w-full min-w-[312px] `}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        className={`color-grey-100 text-lg font-normal text-left ${textFieldClass}`}
      />
    </View>
  );
};

export default InputField;
