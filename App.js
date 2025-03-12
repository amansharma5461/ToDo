import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
