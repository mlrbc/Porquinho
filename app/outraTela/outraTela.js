import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class outraTela extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Text>Hello, Moabe!</Text>
    );
  }
}
