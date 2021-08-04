import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const AppState = ({ children }: any) => {
    return (
        <>
            {/* App children */}
            {children}
        </>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <MainStackNavigator />
            </AppState>
        </NavigationContainer>
    );
};

export default App;
