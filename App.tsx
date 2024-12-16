// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import WinnerScreen from './src/screens/WinnerScreen';
import LoserScreen from './src/screens/LoserScreen'; // Asegúrate de que LoserScreen esté importado correctamente
import { RootStackParamList } from './src/navigation/types';  // Asegúrate de que el tipo esté bien importado

const Stack = createStackNavigator<RootStackParamList>();  // Usa el tipo para el Stack Navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Asegúrate de que cada pantalla esté correctamente registrada como Screen */}
        <Stack.Screen name="Home" component={HomeScreen}options={{ headerShown: false }}/>
        <Stack.Screen name="Game" component={GameScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Winner" component={WinnerScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Loser" component={LoserScreen}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
