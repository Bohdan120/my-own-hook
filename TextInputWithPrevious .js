import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

function usePrevious(value) {
    const ref = useRef();
  
    useEffect(() => {
      ref.current = value;
    }, [value]);
  
    return ref.current;
  }

const TextInputWithPrevious = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default TextInputWithPrevious;
