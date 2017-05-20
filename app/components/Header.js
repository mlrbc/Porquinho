import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headertext}>{this.props.titulo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607D8B',
  },
});
