import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
