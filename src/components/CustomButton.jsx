import { React } from "react";
import { TouchableOpacity, Text } from 'react-native';
import customButtonStyles from "../styles/customButton.styles";

const CustomButton = ({ func, disabledCondition, children }) => {
   return (
      <TouchableOpacity
         disabled={disabledCondition}
         onPress={func}
         style={[customButtonStyles.customButton, (disabledCondition) ? customButtonStyles.customButtonDisabled : null]}
      >
         <Text style={customButtonStyles.textButton}>{children}</Text>
      </TouchableOpacity>
   )
}

export default CustomButton;

