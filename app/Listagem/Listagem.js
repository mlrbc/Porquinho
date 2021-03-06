import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from 'react-native';
import Header from './componentes/Header';
import Centro from './componentes/Centro';

export default class Listagem extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        resizeMode='center'
        source={require('../imagens/icones/Listagem.png')}
        style={[styles.icon, {width: 40 },  tintColor !== '#F00' && { opacity: 0.29 }]}
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
        <Header navigation = {this.props.navigation}/>
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
    width: 96,
    height: 60,
  },
});
