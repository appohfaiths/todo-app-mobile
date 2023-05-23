import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditTodo from './editTodo';

export default function TodoItem({todo, deleteTodo, toggleTodo, editTodo}) {
  const {id, text, completed} = todo;
  const [isEditing, setIsEditing] = useState(false);

  const deleteIcon = (
    <FontAwesome5 name="trash-alt" size={20} color="#3B82F6" />
  );
  const activeIcon = <FontAwesome5 name={'circle'} size={20} color="#3B82F6" />;
  const completedIcon = (
    <FontAwesome5 name={'check-circle'} size={20} color="#3B82F6" />
  );
  const editIcon = <FontAwesome5 name={'pen'} size={20} color="#3B82F6" />;

  return (
    <>
      <View testID={`todoItem-${todo.id}`} style={styles.container}>
        <TouchableOpacity testID="statusButton" onPress={() => toggleTodo(id)}>
          <View style={styles.actionIcon}>
            {completed ? completedIcon : activeIcon}
          </View>
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          {isEditing ? (
            <EditTodo
              id={id}
              text={text}
              setIsEditing={setIsEditing}
              editTodo={editTodo}
            />
          ) : (
            <Text style={completed ? styles.completedTodDo : styles.todoText}>
              {text}
            </Text>
          )}
          {completed ? (
            <View>
              <Text style={styles.statusText}>completed</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.statusText}>active</Text>
            </View>
          )}
        </View>
        <Pressable onPress={() => setIsEditing(!isEditing)}>
          <View style={styles.actionIcon}>{editIcon}</View>
        </Pressable>
        <Pressable
          testID="deleteButton"
          onPress={() => {
            deleteTodo(id);
          }}>
          <View style={styles.actionIcon}>{deleteIcon}</View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
    elevation: 10,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  todoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  statusText: {
    paddingHorizontal: 10,
  },
  completedTodDo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    paddingHorizontal: 10,
    textDecorationLine: 'line-through',
  },
  actionIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
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
    borderRadius: 10,
  },
});
