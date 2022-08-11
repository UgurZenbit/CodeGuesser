import { createAction } from '@reduxjs/toolkit';
import {
  SET_IS_GAME_OVER,
  RESET_GUESS,
  SET_INPUT_VALUE,
  SET_IS_VALID_GUESS,
} from './type';

export const setInputValue = createAction(
  SET_INPUT_VALUE,
  (value: number | undefined) => {
    return {
      payload: value,
    };
  },
);

export const setIsValidGuess = createAction(
  SET_IS_VALID_GUESS,
  (isValid: boolean | null) => {
    return {
      payload: isValid,
    };
  },
);

export const resetGuess = createAction(RESET_GUESS);

export const setIsGameOver = createAction(
  SET_IS_GAME_OVER,
  (isGameOver: boolean) => {
    return {
      payload: isGameOver,
    };
  },
);
