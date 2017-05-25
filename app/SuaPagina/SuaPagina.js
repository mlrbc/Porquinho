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
import Footer from './componentes/Footer';





export default class SuaPagina extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ScrollView>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

			
			
		  {/*Cabeçalho falta modularizar*/}
        <Header navigate = {navigate}/>
        {/*Centro da tela, CPF,Valor e botão registrar*/}
        <Centro/>

        <Footer navigate = {navigate}/>

      </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
