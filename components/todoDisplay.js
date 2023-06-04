import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TodoItem from './todoItem';

export default function TodoDisplay({todos, deleteTodo, toggleTodo, editTodo}) {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          todo={item}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      )}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      testID="todoFlatList"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
