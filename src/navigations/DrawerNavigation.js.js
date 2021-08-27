import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent'

import Home from '../screens/home'
import Movie from '../screens/movie'

const { Navigator, Screen } = createDrawerNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <Navigator drawerContent={props => <DrawerContent {...props} />} initialRouteName="home">
        <Screen
          name="home"
          component={Home}
          options={{
            title: "rafa",
            headerTintColor: '#fff',
            headerStyle: {
              shadowColor: 'transparent',
              backgroundColor: '#211F30',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
          }}
        />
        <Screen
          name="movie"
          component={Movie}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}