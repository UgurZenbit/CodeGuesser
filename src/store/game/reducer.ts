import { createReducer } from '@reduxjs/toolkit';
import { generateRandomGuess } from '../../utils';
import {
  setIsGameOver,
  resetGuess,
  setInputValue,
  setIsValidGuess,
} from './action';

interface GameReducerInterface {
  currentGuess: number | undefined;
  correctGuess: number;
  isValidGuess: boolean | null;
  isGameOver: boolean;
}

const initialState: GameReducerInterface = {
  currentGuess: undefined,
  correctGuess: generateRandomGuess(),
  isValidGuess: null,
  isGameOver: false,
};

const gameReducer = createReducer(initialState, builder => {
  builder
    .addCase(setInputValue, (state, action) => {
      state.currentGuess = action.payload;
    })
    .addCase(setIsValidGuess, (state, action) => {
      state.isValidGuess = action.payload;
    })
    .addCase(resetGuess, state => {
      state.correctGuess = generateRandomGuess();
      state.currentGuess = undefined;
    })
    .addCase(setIsGameOver, (state, action) => {
      state.isGameOver = action.payload;
      state.correctGuess = generateRandomGuess();
      state.currentGuess = undefined;
      state.isValidGuess = null;
    });
});

export default gameReducer;
