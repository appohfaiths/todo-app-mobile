import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from 'react-native';

export default function EditTodo({editTodo, id, text, setIsEditing}) {
  const [editedText, onChangeTodoText] = useState(text);

  const handleSaveChanges = () => {
    if (editedText.trim() !== '') {
      editTodo(id, editedText);
    } else {
      Alert.alert('Error', 'Todo cannot be empty');
      onChangeTodoText(text);
    }
    setIsEditing(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.editTodoInput}
        value={editedText}
        onChangeText={onChangeTodoText}
        autoFocus
        keyboardType={'default'}
        testID="editTodoInput"
        onBlur={handleSaveChanges}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  editTodoInput: {
    height: 44,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: '#edefee',
    backgroundColor: 'white',
    color: 'black',
    width: 235,
    borderRadius: 10,
  },
});
