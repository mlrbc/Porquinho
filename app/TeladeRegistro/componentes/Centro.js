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

export default class Centro extends Component {
  render(){
    return(

      <View style={styles.centroContainer}>
        <View style={styles.containerCPF}>
          <Text style={styles.labelcpf}>Digite o CPF do comprador:</Text>
          <View style={styles.barrainput1}>
          <TextInput style={{height: 60,bottom: 12,fontSize:22,textAlign:'left',fontWeight: 'bold'}}
            onChangeText={(text)=>this.setState({text})}
            placeholder={'CPF'}>
          </TextInput>
          </View>
        </View>
        <View style={styles.containerValor}>
          <Text style={styles.labelcompra}>Digite o valor da compra:</Text>
          <View style={styles.barrainput2}>
            <TextInput style={{bottom: 10,height: 60,fontSize:19,textAlign:'left',color:'green',fontWeight: 'bold'}}
            onChangeText={(text)=>this.setState({text})}
            placeholder={'Valor'}>
            <Text>  R$ </Text>
            </TextInput>
            </View>
        </View>
        <View style={styles.containerRegistro}>

          <TouchableOpacity
          onPress={() => {alert('era para o popup aparecer aqui')}}
          style={styles.botaoregistrar} >
            <Text style={{fontSize:16,color:'white',top: 2,textAlign:'center', fontFamily:'System'}}>REGISTRAR</Text>
          </TouchableOpacity>

        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  centroContainer:{
    height: altura_centro,
    backgroundColor: 'white',
  },
  containerCPF:{
    flex:0.20,
  },
  containerValor:{
    flex:0.20,
  },
  containerRegistro:{
    flex:0.2,
  },
  labelcpf:{
    top: 30,
    left: 20,
    fontSize: 20,
    color: '#808080',
  },
  labelcompra:{
    left: 20,
    fontSize: 20,
    color: '#808080',
  },
  barrainput1:{
    left: 30,
    top: 42,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#e6e6e6',
  },
  barrainput2:{
    left: 30,
    top: 10,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#e6e6e6',
  },
  botaoregistrar:{
    alignSelf: 'center',
    alignItems: 'center',
    width: 130,
    height: 30,
    backgroundColor: '#60B293',
    borderRadius: 100/2,
  },
});
