import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native'
import GameOverScreen from '../src/screens/GameOverScreen';
import { Provider } from 'react-redux';
import store from '../src/store';

test('Game Over Screen', () => {
  const Page = render(
    <Provider store={store}>
      <GameOverScreen />
    </Provider>
  );

  const button = Page.getByTestId('button')
  fireEvent.press(button)

}
)
