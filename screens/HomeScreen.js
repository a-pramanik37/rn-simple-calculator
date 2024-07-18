// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonsContainer}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  resultText: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default HomeScreen;
