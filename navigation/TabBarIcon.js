import React from 'react';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import Theme from '../src/components/Theme'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Theme.gray.lightest : Theme.gray.light}
      />
    );
  }
}