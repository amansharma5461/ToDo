import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screen/HomeScreen';
import CompletedTasksScreen from './src/screen/CompletedTasksScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Completed Tasks" component={CompletedTasksScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
