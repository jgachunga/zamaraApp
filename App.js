import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppIndex from './src';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppIndex/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
