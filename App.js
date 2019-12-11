import React, { Component } from 'react';
import AppNavigator from './navigation/AppNavigator'
import {YellowBox} from 'react-native'


export default class App extends Component {

  // for ignored some expo yelloBox warning 
  
componentWillMount() {
console.ignoredYellowBox = ["Require cycle:", 'Warning: Require cycles'];
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger" ]);
}
  
  render() {
    console.disableYellowBox = true;

    return <AppNavigator/>

  }
}
