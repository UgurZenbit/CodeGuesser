import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../../components/Input';
import ValidationAlert from '../../components/ValidationAlert';
import {
  resetGuess,
  setInputValue,
  setIsValidGuess,
  setIsGameOver,
} from '../../store/game/action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { compareGuesses } from '../../utils';
import GameOverScreen from '../GameOverScreen';

const GameScreen = () => {
  const currentGuess = useAppSelector(state => state.game.currentGuess);
  const correctGuess = useAppSelector(state => state.game.correctGuess);
  const isValidGuess = useAppSelector(state => state.game.isValidGuess);
  const isGameOver = useAppSelector(state => state.game.isGameOver);

  const dispatch = useAppDispatch();

  const handleTextChange = (text: string) => {
    // Do not render validation component
    if (text === '') {
      dispatch(setIsValidGuess(null));
    } else {
      // Render X or V
      if (compareGuesses(correctGuess.toString(), text)) {
        // Right guess
        dispatch(setIsValidGuess(true));
        if (correctGuess.toString() === text) dispatch(setIsGameOver(true));
      } else {
        // Wrong guess
        dispatch(setIsValidGuess(false));
        if (text.length === 4) dispatch(resetGuess());
      }
    }

    const newValue = isNaN(parseInt(text)) ? undefined : parseInt(text);
    dispatch(setInputValue(newValue));
  };

  if (isGameOver) return <GameOverScreen />;

  return (
    <View style={styles.container} testID='Game'>
      <Text>Correct guess: {correctGuess}</Text>
      <Input
        onChangeValue={handleTextChange}
        value={typeof currentGuess === 'number' ? currentGuess.toString() : ''}
        style={styles.extraInputStyle}
      />
      <ValidationAlert
        isValid={isValidGuess}
        guess={typeof currentGuess === 'number' ? currentGuess.toString() : '-'}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraInputStyle: {
    marginVertical: 16,
  },
});

export default GameScreen;
