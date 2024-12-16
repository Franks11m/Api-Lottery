import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/HomeScreenStyles'; // Importa los estilos

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.container}
    >
      <Text style={styles.title}>LOTERIA DE UN MILLON</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game')} // Navega a la pantalla del juego
      >
        <Text style={styles.buttonText}>EMPEZAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;
