import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';

export interface IProps {
  value: string;
  onChangeValue: (text: string) => void;
  style?: StyleProp<TextStyle>;
}

const Input = ({ onChangeValue, value, style }: IProps) => {
  return (
    <TextInput
      onChangeText={onChangeValue}
      value={value}
      style={[styles.input, style]}
      keyboardType="numeric"
      placeholder="Guess a code..."
      maxLength={4}
      testID="input"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    paddingHorizontal: 4,
    textAlign: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    width: 150,
    height: 45,
  },
});

export default Input;
