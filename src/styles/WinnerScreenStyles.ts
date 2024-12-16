// src/styles/WinnerScreenStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFE600', 
    marginBottom: 90,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  winningNumber: {
    fontSize: 130,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
    marginTop: 20,
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
