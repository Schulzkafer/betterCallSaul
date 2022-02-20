import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions } from 'react-native';

import useHttp from '../hooks/http.hook.js';

import CustomButton from "../components/CustomButton.jsx";
import HeaderText from '../components/HeaderText.jsx';
import SampleText from '../components/SampleText.jsx';

import inputStyles from '../styles/input.styles.jsx';
import containerStyles from '../styles/container.styles.jsx';
import Advertisement from "../resources/images/advertisement.jpg"


const windowWidth = Dimensions.get('window').width;

const Screen1 = ({ navigation }) => {

   const [name, setName] = useState("");
   const [isScheduled, setIsScheduled] = useState(false);
   const [status, setStatus] = useState("");

   const { request, isLoading } = useHttp();

   const scheduleCall = async () => {
      const response = await request(
         "http://10.0.2.2:5000/register",
         "POST",
         { name },
      )
      if (response.isOk) {
         setIsScheduled(true)
         navigation.navigate('Status', { name })
      }
      setStatus(response.message)
   }

   return (
      <>
         <View
            style={containerStyles.container}>

            <HeaderText>
               Tem problemas com a lei? É melhor ligar para o Saul!
            </HeaderText>

            <TextInput
               style={inputStyles.input}
               placeholder="Insira seu nome aqui"
               maxLength={40}
               value={name}
               onChangeText={setName}
               editable={!isScheduled}
            />

            <CustomButton
               disabledCondition={name.length === 0 || isLoading || isScheduled}
               func={scheduleCall}
            >Agendar ligação
            </CustomButton>

            <SampleText>{status}</SampleText>

         </View >

         <Image
            source={Advertisement}
            style={[styles.image]}
         />
      </>
   );
}

export default Screen1;

const styles = StyleSheet.create({
   image: {
      width: windowWidth,
   }
});

