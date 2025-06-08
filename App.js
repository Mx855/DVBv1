import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MenuPrincipal from './screens/MenuPrincipal';
// Ajoute tous les autres écrans utilisés ici
import ReservationHomeScreen from './screens/ReservationHomeScreen';
import VehicleListScreen from './screens/VehicleListScreen';
import ReservationFormScreen from './screens/ReservationFormScreen';
import CalendrierScreen from './screens/CalendarScreen';
import CommandeCodialScreen from './screens/CommandeCodialScreen';
import FicheSuiviScreen from './screens/FicheSuiviScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="Réservation véhicule" component={ReservationHomeScreen} />
        <Stack.Screen name="VehicleListScreen" component={VehicleListScreen} />
        <Stack.Screen name="ReservationFormScreen" component={ReservationFormScreen} />
        <Stack.Screen name="Calendrier Réservation" component={CalendrierScreen} />
        <Stack.Screen name="CommandeCodial" component={CommandeCodialScreen} />
        <Stack.Screen name="FicheSuivi" component={FicheSuiviScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
