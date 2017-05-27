import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');


export const altura_centro = (window.height)-170;



export default class Centro extends Component {
  constructor(){
    super();
    this.state = {text:''};


  }


  render(){

    return(
      <View style={{height:altura_centro,}}>
      <Text>Insira o conteudo aqui L</Text>
      </View>


    );
  }
}


const styles = StyleSheet.create({

});
