import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    padding: 5,
    textAlign: 'left',
    color: '#3B82F6',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
