import React from 'react';
import { View,Text} from 'react-native';
import {Ionicons}  from '@expo/vector-icons';

import styles from './styles'


class NoResult extends React.PureComponent {
  render() {

    return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <View style={{marginBottom: 100}} />
      <Ionicons
         name='ios-search'
         size={100} 
         onPress={() => navigation.goBack()}
          />
      <Text style={[styles.txt, {marginTop: 15, fontSize: 19}]}> No results </Text>
  </View>
    );
  }
}



export default NoResult;
