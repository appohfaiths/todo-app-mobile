/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {render, waitFor} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

it('checks if Async Storage is used', async () => {
  await AsyncStorage.getItem('todos');

  expect(AsyncStorage.getItem).toBeCalledWith('todos');
});

it('renders correctly', async () => {
  await waitFor(() => {
    render(<App />);
  });
});
