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
export const altura_footer = (window.height/8)-8;

export default class Footer extends Component {
  render(){
    return(

      <View style={styles.footer}>
        <TouchableOpacity style={styles.icones}>
        {/*ESPERAR NUNES MANDAR OS ICONES*/}
        <Image style={{width:85,height:52}} resizeMode='contain' source={require('../imagens/icones/SuaPagina.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones} onPress={() => this.props.navigate('TelaRegistro')}>
        {/*ESPERAR NUNES MANDAR OS ICONES*/}
        <Image style={{width:85,height:52,left:4,opacity:0.29}} resizeMode='contain' source={require('../imagens/icones/Registrar.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones} onPress={() => this.props.navigate('Listagem')}>
        {/*ESPERAR NUNES MANDAR OS ICONES*/}
        <Image style={{width:85,height:52,opacity:0.29}} resizeMode='contain' source={require('../imagens/icones/Listagem.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icones}>
        {/*ESPERAR NUNES MANDAR OS ICONES*/}
        <Image style={{width:85,height:52,opacity:0.29}} resizeMode='contain' source={require('../imagens/icones/Ajustes.png')} />
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
    top:7,
    left:14,
  },
});
