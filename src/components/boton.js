import React from "react";
import { Button } from "react-native-paper";
import { primaryColor, secundaryColor } from "../config/colors";

export const Boton = (props) => {
  const { title, onPress, mode, loading, disabled, icon, style } = props;

  return (
    <Button
      mode={mode || "contained"}
      onPress={onPress}
      loading={loading || false}
      disabled={disabled || false}
      icon={icon}
      style={[{ margin: 10, backgroundColor: primaryColor }, style]}
      contentStyle={{ padding: 5 }}
      labelStyle={{ color: secundaryColor }}
    >
      {title}
    </Button>
  );
};
