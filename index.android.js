/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

export default class Porquin extends Component {
  render() {
    return (


      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerTextBox}>
            <Text style={styles.headerText}>Registro de Compras</Text>
          </View>
          <View style={styles.subBarra}>
            <Text style={styles.subBotoesText}>INSERIR</Text>
            <Text style={styles.subBotoesText}>RETIRAR</Text>
            <Text style={styles.subBotoesText}></Text>
          </View>
        </View>

        <View style={styles.centroContainer}>
          <Text style={styles.labelcpf}>Digite o CPF do comprador:</Text>
          <View style={styles.barrainput1}>
            <TextInput style={{fontSize:22,textAlign:'center',fontWeight: 'bold'}}
            onChangeText={(text)=>this.setState({text})}
             placeholder={'CPF'}>
            </TextInput>
          </View>
          <Text style={styles.labelcompra}>Digite o valor da compra:</Text>
          <View style={styles.barrainput2}>
            <TextInput style={{fontSize:22,textAlign:'center',color:'green',fontWeight: 'bold'}}
            onChangeText={(text)=>this.setState({text})}
            placeholder={'Valor'}>
            </TextInput>
          </View>
        </View>

        <TouchableOpacity
        onPress={() => {alert('era para o popup aparecer aqui')}}
        style={styles.botaoregistrar} >
          <Text style={{fontSize:16,color:'white',top: 2, fontFamily:'System'}}>REGISTRAR</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={{fontSize: 30}}> Aqui será a barra de icones </Text>
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
    flex:0.55,
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
    paddingTop: 25,
    color: 'white',
    fontSize: 24,
  },
  subBarra:{
    flex:1,
    flexDirection: 'row',
    paddingRight: 22,
    width: 410,
  },
  subBotoes:{


  },
  subBotoesText:{
    flex: 1,
    fontSize: 16,
    letterSpacing: 1,
    fontFamily:'System',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  centroContainer:{
    flex:2.50,
  },
  labelcpf:{
    top: 30,
    left: 30,
    fontSize: 20,
    color: '#808080',
  },
  labelcompra:{
    top: 60,
    left: 30,
    fontSize: 20,
    color: '#808080',
  },
  barrainput1:{
    position: 'relative',
    left: 50,
    top: 42,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#d9d9d9',
  },
  barrainput2:{
    position: 'relative',
    left: 50,
    top: 80,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#d9d9d9',
  },
  botaoregistrar:{
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100/2,
    top: 400,
    width: 130,
    height: 30,
    backgroundColor: '#60B293',
  },
  footer:{
    flex: 0.30,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

AppRegistry.registerComponent('Porquin', () => Porquin);
