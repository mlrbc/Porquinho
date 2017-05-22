import React from 'react';
import {
  AppRegistry,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class outraTela extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {

    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity onPress={}>
      <Text>VOLTA NUNES</Text>
      </TouchableOpacity>

    );
  }
}
