import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    color: '#FFE600',
    marginBottom: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  instructionText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 1, // Espacio entre el texto y la cuadrícula de números
    textAlign: 'center',
    },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  numberBox: {
    width: 60,
    height: 60,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    borderRadius: 3,
  },
  numberText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedNumber: {
    backgroundColor: '#FFFF00', // Resalta el número con un color dorado
    borderColor: '#e67e22', // Borde más oscuro cuando se selecciona
  },
  button: {
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    marginTop: 100,
  },
  buttonText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,


  },
});
