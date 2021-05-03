import * as React from 'react'
import {View,Text} from 'react-native'
import {DrawerItems,createDrawerNavigator} from 'react-navigation-drawer'
import{ TabNavigator} from '../TabNavigator'
import CustomSideDrawer from './customSideDrawer'

export const DrawerNavigator=createDrawerNavigator({
    Home:TabNavigator
},
{
    contentComponent:CustomSideDrawer
},
{
     initialRouteName:'Home'
}
)