import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>c 2023 Faith S. Appoh || An || Ma</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    marginVertical: 20,
  },
  footer: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
  },
});
