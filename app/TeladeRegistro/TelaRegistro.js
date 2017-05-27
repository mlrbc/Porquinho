import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import Header from './componentes/Header';
import Centro from './componentes/Centro';





export default class TelaRegistro extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        style={styles.icon}
        resizeMode='center'
        source={require('../imagens/icones/Registrar.png')}
      />
    ),
    header:null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ScrollView style={{backgroundColor:'white'}}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

			
			
		  {/*Cabeçalho falta modularizar*/}
        <Header navigate = {navigate}/>
        {/*Centro da tela, CPF,Valor e botão registrar*/}
        <Centro/>


      </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  icon:{
    left:3,
    width: 96,
    height: 60,
  },
});
