import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function EditTodo({editTodo, id, text, toggleEditForm}) {
  const [editedText, onChangeTodoText] = useState(text);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.editTodoInput}
        value={editedText}
        onChangeText={onChangeTodoText}
        autoFocus
        keyboardType={'default'}
        testID="editTodoInput"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  editTodoInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#edefee',
    backgroundColor: 'white',
    color: 'black',
    width: '97%',
    borderRadius: 25,
  },
});
