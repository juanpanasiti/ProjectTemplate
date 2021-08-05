import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigator;
