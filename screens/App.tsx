import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import EditMenuScreen from './EditMenuScreen';
import PasscodeScreen from './PasscodeScreen';
import FilterMenuScreen from './FilterMenuScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenu" component={AddMenuScreen} />
        <Stack.Screen name="EditMenu" component={EditMenuScreen} />
        <Stack.Screen name="Passcode" component={PasscodeScreen} />
        <Stack.Screen name="FilterMenu" component={FilterMenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
