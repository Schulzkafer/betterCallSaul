import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './src/screens/Screen1.jsx';
import Screen2 from './src/screens/Screen2.jsx';
import colors from './src/styles/colors.jsx';

const Stack = createNativeStackNavigator();

export default function App() {

   return (
      <>
         <StatusBar hidden={true} />
         <NavigationContainer theme={MyTheme} >
            <Stack.Navigator >
               <Stack.Screen
                  name="Home"
                  component={Screen1}
               />
               <Stack.Screen
                  name="Status"
                  component={Screen2}
               />
            </Stack.Navigator>
         </ NavigationContainer >
      </>
   );
}

const MyTheme = {
   dark: false,
   colors: {
      card: "#0A0804",
      text: colors.wheat,
   },
};



