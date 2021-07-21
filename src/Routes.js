import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './Pages/Home';

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Pagina1" component={Home} options={{ title: 'Informações do Campus', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}