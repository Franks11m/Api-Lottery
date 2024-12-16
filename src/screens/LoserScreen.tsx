// src/screens/LoserScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';  // Importa el tipo de navegación
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { styles } from '../styles/LoserScreenStyles';

// Define los tipos para los props de la pantalla Loser
type LoserScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Loser'>;
type LoserScreenRouteProp = RouteProp<RootStackParamList, 'Loser'>;

const LoserScreen = () => {
  const navigation = useNavigation<LoserScreenNavigationProp>();  // Usamos el tipo para navegación
  const route = useRoute<LoserScreenRouteProp>();  // Usamos useRoute para obtener los parámetros

  const { number } = route.params;  // Accedemos al parámetro 'number'

  return (
    <ImageBackground
      source={require('../../assets/background-loser.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>MALA SUERTE</Text>

        <View style={styles.circle}>
          <Text style={styles.losingNumber}>{number}</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Game')}  // Navega a la pantalla de juego
        >
          <Text style={styles.buttonText}>INTENTAR DE NUEVO</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoserScreen;
