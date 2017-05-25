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
  Modal,
} from 'react-native';

const window = Dimensions.get('window');

export const altura_header = (window.height/5)-20;
export const altura_centro = (window.height)-180;
export const altura_footer = (window.height/8)-32;
export const altura = (window.height);
export const largura = (window.width);


export default class Centro extends Component {
  constructor(){
    super();
    this.state = {visible:false,popup:null,text:''};
    this.pessoa = {nome:'Moabe Reato',age:'18',profission:'Estudante'};


  }


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
          onPress={() => {
                this.setState({visible:true});
            }
          }
          style={styles.botaoregistrar} >
            <Text style={{fontSize:16,color:'white',top: 3,textAlign:'center', fontFamily:'System'}}>REGISTRAR</Text>
          </TouchableOpacity>

        </View>

        <View>
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.visible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <View style={styles.container1}>
              <View style={styles.caixadetexto}>
              <View style={{position:'absolute',borderRadius:100/2,height:100,width:50}}>
              </View>
                <View>
                  <Image style={styles.foto} resizeMode='stretch' source={require('../imagens/pp.jpg')} />
                </View>
                <Text style={styles.textonivel}>Cliente Fíel</Text>
                <Text style={styles.textonome}>{this.pessoa.nome}</Text>
                <Text style={styles.idadeprofissao}>{this.pessoa.age},{this.pessoa.profission}</Text>
                <Text style={styles.comprou}>Comprou</Text>
                <Text style={styles.valor}>{this.state.text}</Text>
                <View style={styles.containerRegistro}>

                  <TouchableOpacity
                  onPress={() => {this.setState({visible:false})}}
                  style={styles.botaoregistrar} >
                    <Text style={{fontSize:16,color:'white',top: 2,textAlign:'center', fontFamily:'System'}}>CONFIRMAR</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
        </Modal>
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
    height:(altura_centro/4),

  },
  containerValor:{
    top:20,
    height:(altura_centro/4),

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
    fontFamily: 'SF UI Text',
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
    color: '#565656',
    fontSize:20,
    textAlign:'left',
    fontWeight: 'bold',
  },
  textInputValor:{
    bottom: 8,
    height: 60,
    fontSize:27,
    textAlign:'left',
    color:'#60B293',
    fontWeight: 'bold',
    lineHeight: 28,
    fontFamily: 'SF UI Text',
  },
  barrainput2:{
    left: 30,
    top: 10,
    borderRadius: 100/2,
    width: 300,
    height: 45,
    backgroundColor: '#F4F4F4',


  },
  container1:{
    flex:1,
    height: altura,
    backgroundColor:'rgba(0, 0, 0,0.50)',
  },
  caixadetexto:{
    borderRadius: 100/2,
    alignSelf:'center',
    height: (altura/2)-40,
    width: (largura)-50,
    top: (altura/5),
    backgroundColor: 'white',
  },
  foto:{
    top:26,
    left: 230,
    position:'absolute',
    borderRadius:100,
    width:62,
    height:62,
    },
  textonivel:{
    top: 15,
    left: 50,
    opacity: 0.61,
    color: '#2B2B2B',
    fontSize:16,
  },
  textonome:{
    left: 50,
    top: 15,
    fontSize:24,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.87)',
  },
  idadeprofissao:{
    left:50,
    top: 17,
    fontSize:19,
    color:'#565656',
  },
  comprou:{
    fontSize:14,
    color: '#66B597',
    top: 35,
    alignSelf:'center',
  },
  valor:{
    top:40,
    fontSize:38,
    color: '#66B597',
    alignSelf:'center',
  },
  containerRegistro:{
    top: 70,
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
