import { View } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from './screens/Exchange'
import Home from './screens/Home'

export const TabNavigator=createBottomTabNavigator({

    Home:{
        screen:Home
    },
    Exchange:{
        screen:Exchange
    }
})