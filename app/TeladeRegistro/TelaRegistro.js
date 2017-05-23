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
import Popup from './componentes/Popup';





export default class TelaRegistro extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ScrollView>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>


        <Header navigate = {navigate}/>
        {/*Centro da tela, CPF,Valor e botão registrar*/}
        <Centro/>

        <Footer/>

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
