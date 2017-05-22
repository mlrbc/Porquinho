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

export default class Header extends Component {
  render(){
    return(

      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>Registro de Compras</Text>
        </View>
        {/*Ainda nao tem as ações dos botoes de menus.*/}
        <View style={styles.subBarra}>
          <TouchableOpacity
           onPress={() => this.props.navigate('outraTela')}
           style={styles.subBotoes}>
            <Text style={styles.subBotoesText}>INSERIR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subBotoes}>
            <Text style={styles.subBotoesText}>RETIRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subBotoes}>
            <Text style={styles.subBotoesText}></Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: altura_header,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#607D8B',

  },
  headerTextBox:{
    flex: 1.50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText:{
    paddingTop: 20,
    color: 'white',
    fontSize: 24,
  },
  subBarra:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 22,
    width: 410,
  },
  subBotoes:{
    flex:1,
    alignSelf: 'center',
    alignItems: 'center',
    top: 10,
    left:34,

  },
  subBotoesText:{
    fontSize: 16,
    bottom: 5,
    right: 15,
    fontFamily:'System',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
