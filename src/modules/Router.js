import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {
    HomeScreen, LoginScreen, RegisterScreen, ErrorScreen, FeedScreen,
    MenuScreen, ProfileScreen,
} from '../pages/Index'

const Router = props => {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='Error' component={ErrorScreen} />
                <Stack.Screen name='Feed' component={FeedScreen} />
                <Stack.Screen name='Menu' component={MenuScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </ApplicationProvider>
    )
}

export default Router

const Stack = createStackNavigator();