export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
  Winner: { number: number };  // Número que será mostrado en la pantalla de "Winner"
  Loser: { number: number };   // Número del perdedor, pasaremos como parámetro
};
