import React from 'react';
import Platform from 'react-native'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {createStackNavigator}from 'react-navigation-stack'

import MovieScreen from "../src/screens/MovieScreen"
import FavoritScreen from '../src/screens/FavoritScreen'
import SearchScreen from '../src/screens/SearchScreen'

import TabBarIcon from './TabBarIcon'
import Theme from '../src/components/Theme'

const FavoritScreenStack = createStackNavigator(
  { FavoritScreen :FavoritScreen  }
                    )

   FavoritScreenStack.navigationOptions = {
    tabBarLabel: 'Favorite',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios' ? 'md-heart-empty'
                                : 'md-heart-empty'
        }
      />
    ) }


  const SearchScreenStack = createStackNavigator(
                      { Search :SearchScreen ,
                        movie : MovieScreen 
                      })

       SearchScreenStack.navigationOptions = {
                        tabBarLabel: ' Search',
                        // labelStyle:{ fontSize: 22 },
                        tabBarIcon: ({ focused }) => (
                          <TabBarIcon
                            focused={focused}
                            name={
                              Platform.OS === 'ios'? 'ios-search'
                                                   : 'ios-search'
                            }
                          />
                        ) }

export default createMaterialBottomTabNavigator({
    SearchScreenStack,
    FavoritScreenStack,
     },
     {
      initialRouteName: 'SearchScreenStack',
      activeTintColor: Theme.gray.lightest,
      inactiveTintColor: Theme.gray.light,
      activeBackgroundColor: Theme.colors.bottomNavbar,
      inactiveBackgroundColor: Theme.colors.bottomNavbar,
      barStyle:{ backgroundColor: Theme.colors.bottomNavbar ,
                 borderTopWidth: 1,
                 borderTopColor: Theme.colors.bottomNavbar  }
      }
   
)