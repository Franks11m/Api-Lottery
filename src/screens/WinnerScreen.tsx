// src/screens/WinnerScreen.tsx
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Importa el tipo

import { styles } from '../styles/WinnerScreenStyles';

const WinnerScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Asigna el tipo a useNavigation

  return (
    <ImageBackground
      source={require('../../assets/background-winner.png')} // Ruta a la imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>FELICIDADES</Text>

        <View style={styles.circle}>
          <Text style={styles.winningNumber}>10</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')} // Regresa a la pantalla de inicio
        >
          <Text style={styles.buttonText}>VOLVER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WinnerScreen;
