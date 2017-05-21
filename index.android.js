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

export const altura_header = (window.height/5)-37;
export const altura_centro = (window.height)-180;
export const altura_footer = (window.height/8)-30;


export default class Porquin extends Component {
  render() {
    return (

      <ScrollView>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerTextBox}>
            <Text style={styles.headerText}>Registro de Compras</Text>
          </View>
          {/*Ainda nao tem as ações dos botoes de menus.*/}
          <View style={styles.subBarra}>
            <TouchableOpacity style={styles.subBotoes}>
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

        {/*Centro da tela, CPF,Valor e botão registrar*/}
        <View style={styles.centroContainer}>
          <View style={styles.containerCPF}>
            <Text style={styles.labelcpf}>Digite o CPF do comprador:</Text>
            <View style={styles.barrainput1}>
            <TextInput style={{fontSize:22,textAlign:'center',fontWeight: 'bold'}}
              onChangeText={(text)=>this.setState({text})}
              placeholder={'CPF'}>
            </TextInput>
            </View>
          </View>
          <View style={styles.containerValor}>
            <Text style={styles.labelcompra}>Digite o valor da compra:</Text>
            <View style={styles.barrainput2}>
              <TextInput style={{fontSize:22,textAlign:'center',color:'green',fontWeight: 'bold'}}
              onChangeText={(text)=>this.setState({text})}
              placeholder={'Valor'}>
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




        <View style={styles.footer}>
          <TouchableOpacity style={styles.icones}>
          <Image style={{width:92,height:52}} resizeMode='stretch' source={require('./app/imagens/icones/Suapaginaselec.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icones}>
          <Image style={{width:92,height:52}} resizeMode='stretch' source={require('./app/imagens/icones/Criar.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icones}>
          <Image style={{width:92,height:52}} resizeMode='stretch' source={require('./app/imagens/icones/Acompanhar.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icones}>
          <Image style={{width:92,height:52}} resizeMode='stretch' source={require('./app/imagens/icones/Ajustes.jpg')} />
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
      </ScrollView>

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
    left: 20,

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
  centroContainer:{
    height: altura_centro,
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
    backgroundColor: '#d9d9d9',
  },
  barrainput2:{
    left: 30,
    top: 10,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#d9d9d9',
  },
  botaoregistrar:{
    alignSelf: 'center',
    alignItems: 'center',
    width: 130,
    height: 30,
    backgroundColor: '#60B293',
    borderRadius: 100/2,
  },
  footer:{
    height: altura_footer,
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
  },
  icones:{
    flex:1,
  },
});

AppRegistry.registerComponent('Porquin', () => Porquin);
