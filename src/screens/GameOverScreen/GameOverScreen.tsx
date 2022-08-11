import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { setIsGameOver } from '../../store/game/action';
import { useAppDispatch } from '../../store/hooks';

const GameOverScreen = () => {
  const dispatch = useAppDispatch();

  const createNewGame = () => {
    dispatch(setIsGameOver(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameOverText}>You guessed the right code.</Text>
      <Text style={styles.gameOverText}>Game over!</Text>
      <Button testID="button" onPress={createNewGame} title="Play Again" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontWeight: '400',
    fontSize: 24,
    marginBottom: 16,
  },
});

export default GameOverScreen;
