import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye espacio entre los elementos
    paddingVertical: 110, // Espaciado arriba y abajo
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFE600',
    marginBottom: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
    textAlign: 'center', 
    marginTop: 100, // Baja el texto 50px desde su posición inicial

    
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
    marginTop: 200,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 1,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,


  },
});
