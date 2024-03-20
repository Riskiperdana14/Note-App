/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStacks from './src/navigators/RootStack';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = (): React.JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <RootStacks />
            </NavigationContainer>
        </QueryClientProvider>
    );
};

export default App;
