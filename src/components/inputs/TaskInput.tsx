import React, {useRef, useState} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  addTask: (name: string) => void;
};

const TaskInput = ({addTask}: Props) => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    if (text === '') {
      return;
    }
    addTask(text);
    setText('');
    inputRef.current?.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        onChange={e => setText(e.nativeEvent.text)}
        placeholder="Enter a task"
        placeholderTextColor={'#9e9e9e'}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    height: 40,
    flex: 1,
  },
  submitButton: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61f7ff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonText: {
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TaskInput;
