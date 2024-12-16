import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/GameScreenStyles';

interface Props {
  navigation: any; // Recibir navigation como prop
}

const GameScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  // Lógica para manejar el número seleccionado
  const handleNumberPress = (number: number) => {
    setSelectedNumber(number);
  };

  // Renderizar la cuadrícula de números
  const renderGrid = () => {
    const numbers = [4, 12, 8, 16, 7, 19, 5, 10, 1, 14, 6, 3, 18, 11, 9, 20];
    return numbers.map((number, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.numberBox,
          selectedNumber === number && styles.selectedNumber, // Estilo ganador
        ]}
        onPress={() => handleNumberPress(number)}
      >
        <Text style={styles.numberText}>{number}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ImageBackground
      source={require('../../assets/background-game.png')}
      style={styles.container}
    >
      <Text style={styles.title}>Lottery Simulator</Text>
      
      {/* Texto "Selecciona un número" */}
      <Text style={styles.instructionText}>Selecciona un número</Text>

      {/* Renderiza la cuadrícula de números */}
      <View style={styles.grid}>{renderGrid()}</View>

      {/* Botón "SORTEAR" solo habilitado si el número 10 es seleccionado */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (selectedNumber === 10) {
            navigation.navigate('Winner'); // Navega a la pantalla ganadora si el número es 10
          } else {
            navigation.navigate('Loser', { number: selectedNumber }); // Navega a la pantalla de perdedor
          }
        }}
        disabled={selectedNumber === null} // Deshabilitar el botón si no hay número seleccionado
      >
        <Text style={styles.buttonText}>SORTEAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default GameScreen;
