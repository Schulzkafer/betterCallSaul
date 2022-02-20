import React, { useState } from "react";
import { View } from "react-native";

import HeaderText from "../components/HeaderText";
import containerStyles from "../styles/container.styles";

const Screen2 = ({ route }) => {
   return (
      <View style={containerStyles.container}>
         <HeaderText>{route.params.name},
            o seu pedido de ligação foi registrado com sucesso!
            Daqui a pouco o Saul vai ligar para você!</HeaderText>
      </View>
   );
};

export default Screen2;