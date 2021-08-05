import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import AboutScreen from '../screens/AboutScreen';
import MainDrawerNavigator from './MainDrawerNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="MainDrawerNavigator" component={MainDrawerNavigator} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
