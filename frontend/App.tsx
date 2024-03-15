/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStacks from './src/navigators/RootStack';

const App = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <RootStacks />
        </NavigationContainer>
    );
};

export default App;
