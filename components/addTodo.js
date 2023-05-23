import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function AddTodo({addTodo}) {
  const [todoText, onChangeTodoText] = useState('');

  const addNewTodo = () => {
    if (todoText === '') {
      Alert.alert('Error', 'Please add some text to create a todo ');
    } else {
      addTodo(todoText);
      // Alert.alert('Success', 'You added a new todo');
      onChangeTodoText('');
    }
  };

  const addTodoIcon = (
    <FontAwesome5 name={'plus-circle'} size={40} color="#3B82F6" />
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.addTodoInput}
          value={todoText}
          onChangeText={onChangeTodoText}
          placeholder={'add a new todo'}
          keyboardType={'default'}
          testID="todoInput"
        />
      </View>
      <TouchableOpacity onPress={addNewTodo} testID="addtodoButton">
        <View style={styles.iconContainer}>{addTodoIcon}</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#3B82F6',
    paddingRight: 5,
    borderRadius: 50,
    padding: 2,
  },
  inputContainer: {
    flex: 1,
  },
  addTodoInput: {
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
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
});
