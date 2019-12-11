import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Splash from '../src/screens/splash'

export default createAppContainer(
  createSwitchNavigator({
    Splash ,
    Main: MainTabNavigator,
  })
);