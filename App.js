import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import usePrevious from './usePrevious';

export default function App() {
  const [text, setText] = useState('');
  const previousText = usePrevious(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Введіть текст"
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.text}>Поточне значення: {text}</Text>
      <Text style={styles.text}>Попереднє значення: {previousText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
