import React from 'react';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';

import MainRoutes from './src/router'

import PokemonHollow from './assets/fonts/pokemon/Pokemon-Hollow.ttf'
import PokemonSolid from './assets/fonts/pokemon/Pokemon-Solid.ttf'

export default function App() {

  const [fontsLoaded] = useFonts({
    PokemonHollow,
    PokemonSolid,
  })

  if (!fontsLoaded) {
    return null;
  }


  return (
    <PaperProvider>
      <MainRoutes />
    </PaperProvider>
  );
}
