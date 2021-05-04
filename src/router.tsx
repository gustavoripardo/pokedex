import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import PokeType from './pages/pokeType'
import PokeProfile from './pages/pokeProfile'

const Stack = createStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "#e0e0e0" // app background

function MainRoutes() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="main"  component={Main} />
        <Stack.Screen name="pokeType"  component={PokeType} />
        <Stack.Screen name="pokeProfile"  component={PokeProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoutes;