
import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};


export default App;
