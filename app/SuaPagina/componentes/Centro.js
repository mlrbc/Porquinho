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

export const altura_header = (window.height/5)-20;
export const altura_centro = (window.height)-170;
export const altura_footer = (window.height/8)-32;
export const altura = (window.height);
export const largura = (window.width);


export default class Centro extends Component {
  constructor(){
    super();
    this.state = {text:''};


  }


  render(){

    return(
      <View style={{height:altura_centro,}}>
      <Text>Insira o conteudo aqui</Text>
      </View>


    );
  }
}


const styles = StyleSheet.create({

});
