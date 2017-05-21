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
} from 'react-native';

export default class Porquin extends Component {
  render() {
    return (


      <View style={styles.container}>

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
    paddingTop: 20,
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
    flex:1,
    alignSelf: 'center',
    top: 10,
    left: 20,

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
    left: 20,
    fontSize: 20,
    color: '#808080',
  },
  labelcompra:{
    top: 60,
    left: 20,
    fontSize: 20,
    color: '#808080',
  },
  barrainput1:{
    position: 'relative',
    left: 30,
    top: 42,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#d9d9d9',
  },
  barrainput2:{
    position: 'relative',
    left: 30,
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
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
  },
  icones:{
    flex:1,
  },
});

AppRegistry.registerComponent('Porquin', () => Porquin);
