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

export const altura_header = (window.height/5)-68;
export const altura_centro = (window.height)-180;
export const altura_footer = (window.height/8)-32;

export default class Header extends Component {
  render(){
    return(

      <View style={styles.header}>
        <View style={styles.headerTextBox}>
          <Text style={styles.headerText}>Porquin</Text>
          <Text style={{top: 5,fontFamily:'notoserif',fontWeight:'bold',fontSize: 14,lineHeight:20,color:'white'}}>LOJA</Text>
        </View>
        {/*Ainda nao tem as ações dos botoes de menus.*/}

      </View>


    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: altura_header,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#607D8B',

  },
  headerTextBox:{
    flex: 1.20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText:{
    paddingTop: 5,
    right: 7,
    color: 'white',
    lineHeight: 49,
    fontSize: 36,
    fontFamily:'GrandHotel-Regular',
  },
  subBarra:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 22,
    width: 410,
    height:100,
    
  },
  subBotoes:{
    flex:1,
    alignSelf: 'center',
    alignItems: 'center',
    top: 10,
    left:34,

  },
  subBotoesText:{
    fontSize: 14,
    bottom: 4,
    right: 15,
    fontFamily:'System',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
