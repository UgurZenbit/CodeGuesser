import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import GameScreen from '../src/screens/GameScreen/GameScreen';
import { Provider } from 'react-redux';
import store from '../src/store';
import { compareGuesses, generateRandomGuess } from '../src/utils';


test('Game Screen',() =>{
  const GamePage = render( 
  <Provider store={store}>
     <GameScreen />
  </Provider>
    );
  const inputval = GamePage.getByTestId('input')
  fireEvent.changeText(inputval)
  }
)
test("generateRandomNumber", () => {
  expect(generateRandomGuess()).toBeLessThan(10001);
  expect(generateRandomGuess()).toBeGreaterThan(1000);
}
)
test("compareGuesses", () => {
  expect(compareGuesses('1','1')).toBe(true)
  expect(compareGuesses('32','32')).toBe(true)
  expect(compareGuesses('197','197')).toBe(true)
  expect(compareGuesses('9562','9562')).toBe(true)
  expect(compareGuesses('3','5')).toBe(false)
  expect(compareGuesses('812','818')).toBe(false)
  expect(compareGuesses('442','441')).toBe(false)
  expect(compareGuesses('12','18')).toBe(false)
  expect(compareGuesses('66','65')).toBe(false)
  expect(compareGuesses('2243','2245')).toBe(false)
}
)
