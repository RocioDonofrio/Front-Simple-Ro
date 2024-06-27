import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { secundaryColor } from "../config/colors";

export const PassInput = (props) => {
  const { label, value, onChange, type } = props;
  const [secureText, setSecureText] = useState(true);

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={(text) => onChange(text)}
      style={{ marginVertical: 10 }}
      mode="outlined"
      secureTextEntry={secureText}
      activeOutlineColor={secundaryColor}
      right={
        <TextInput.Icon
          icon={secureText ? "eye-off" : "eye"}
          onPress={toggleSecureText}
        />
      }
      keyboardType={type}
    />
  );
};
