import React from 'react';
import {SafeAreaView, KeyboardAvoidingView, StyleSheet} from 'react-native';
import Header from './components/header';
import Footer from './components/footer';
import TodoList from './screens/todoList';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.flexContainer}>
        <Header />
        <TodoList />
        <Footer />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
});

export default App;
