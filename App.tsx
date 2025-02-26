import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';
import './firebaseConfig'; // Ensure Firebase is initialized
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', async nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
        await checkToken();
      }
      appState.current = nextAppState;
    });
    checkToken();
    console.log('App has rendered');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
