import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';
import Header from './componentes/Header';
import Centro from './componentes/Centro';





export default class SuaPagina extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        resizeMode='center'
        source={require('../imagens/icones/SuaPagina.png')}
        style={styles.icon}
      />
    ),
    header:null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ScrollView style={{backgroundColor:'white',flex:1}}>
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
  },
   icon:{
    width: 85,
    height: 60,
  },
});
