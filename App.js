import 'react-native-gesture-handler';
import React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Home} from './src/Pages/Home';
import {Sobre} from './src/Pages/Sobre';
import {Main} from './src/Pages/Main';
import {Cursos} from './src/Pages/Cursos';
import {Ads} from './src/Pages/Cursos/Ads';
import {Quimica} from './src/Pages/Cursos/Quimica';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Cursos" component={Cursos} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{ headerShown: false  }} />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
      />
      <Stack.Screen
        name="Ads"
        component={Ads}
      />
      <Stack.Screen
        name="Quimica"
        component={Quimica}
      />
     </Stack.Navigator>
   </NavigationContainer>
  );
}