import { TextInput } from "react-native-paper";
import { primaryColor, secundaryColor } from "../config/colors";

export const Input = (props) => {
  const { label, value, onChangeText, icon, type } = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={{}}
      mode="outlined"
      activeOutlineColor={secundaryColor}
      right={<TextInput.Icon icon={icon} />}
      keyboardType={type}
    />
  );
};
