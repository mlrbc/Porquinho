import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';

const window = Dimensions.get('window');

export const altura_header = (window.height/5)-20;
export const altura_centro = (window.height)-180;
export const altura_footer = (window.height/8)-32;

export default class Footer extends Component {
  render(){
    return(

      <View style={styles.footer}>
        <TouchableOpacity style={styles.icones}>
        <Image style={{width:92,height:52}} resizeMode='stretch' source={require('../imagens/icones/Suapaginaselec.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones}>
        <Image style={{width:92,height:52}} resizeMode='stretch' source={require('../imagens/icones/Criar.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones}>
        <Image style={{width:92,height:52}} resizeMode='stretch' source={require('../imagens/icones/Acompanhar.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones}>
        <Image style={{width:92,height:52}} resizeMode='stretch' source={require('../imagens/icones/Ajustes.jpg')} />
        </TouchableOpacity>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  footer:{
    height: altura_footer,
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  icones:{
    flex:1,
  },
});
