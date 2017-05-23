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
          <TextInput maxLength={13} underlineColorAndroid={'transparent'} style={styles.textInputCpf} onChangeText={(text)=>this.setState({text})}
            placeholder={'CPF'}>
          </TextInput>
          </View>
        </View>
        <View style={styles.containerValor}>
          <Text style={styles.labelcompra}>Digite o valor da compra:</Text>
          <View style={styles.barrainput2}>
            <TextInput underlineColorAndroid={'transparent'} style={styles.textInputValor}
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
            <Text style={{fontSize:16,color:'white',top: 3,textAlign:'center', fontFamily:'System'}}>REGISTRAR</Text>
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
    fontSize: 17,
    color: '#808080',
    fontFamily:'SF Compact Text',
  },
  labelcompra:{
    left: 20,
    fontSize: 17,
    color: '#808080',
  },
  barrainput1:{
    left: 30,
    top: 42,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#F4F4F4',
  },
  textInputCpf:{
    bottom: 8,
    height: 60,
    left:13,
    fontSize:20,
    textAlign:'left',
    fontWeight: 'bold',
  },
  textInputValor:{
    bottom: 8,
    height: 60,
    fontSize:27,
    textAlign:'left',
    color:'green',
    fontWeight: 'bold',
    fontFamily: 'SF UI Text',
  },
  barrainput2:{
    left: 30,
    top: 10,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#F4F4F4',
    fontFamily: 'SF UI Text',

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
