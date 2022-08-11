import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import { MotiView as View } from 'moti';

export interface IProps {
  isValid: boolean | null;
  guess: string;
}

const ValidationAlert = ({ isValid, guess }: IProps) => {
  return (
    <View
      style={styles.container}
      from={{ opacity: 1 }}
      animate={{
        opacity: isValid === null ? 0 : 1,
        borderColor: isValid ? '#2ECC71' : '#C0392B',
      }}
      exit={{
        opacity: 0,
      }}>
      <Text style={styles.guessText}>Your guess: {guess}</Text>
      <View
        animate={{
          borderColor: isValid ? '#2ECC71' : '#C0392B',
        }}
        style={styles.boxContainer}>
        <Text style={styles.validationText}>{isValid ? 'V' : 'X'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxContainer: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 4,
    borderWidth: 1,
  },
  validationText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4f4f4f',
  },
  guessText: {
    fontWeight: '300',
    fontSize: 20,
    color: 'black',
  },
});

export default ValidationAlert;
