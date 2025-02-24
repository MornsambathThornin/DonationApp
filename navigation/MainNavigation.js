import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import SingleDonationScreen from '../screens/SingleDonationItem/SingleDonationScreen';
import Login from '../screens/Login/Login';
import Registration from '../screens/Register/Registration';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationScreen}
        component={SingleDonationScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
