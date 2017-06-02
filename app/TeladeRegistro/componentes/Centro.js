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

export const altura_centro = (window.height) - 184;
export const altura = (window.height);
export const largura = (window.width);


export default class Centro extends Component {
  constructor() {
    super();
    this.state = { visible: false, popup: null, text: '' };
    this.pessoa = { nome: 'Moabe Reato', age: '18', profission: 'Estudante', imagem: "https://scontent.frec8-1.fna.fbcdn.net/v/t1.0-9/18423858_1594894783917055_734944950526860405_n.jpg?oh=85df8fd6e5b57855bf5b89cebd1d01c6&oe=59B02328" };
  }

  render() {
    return (
      <View style={styles.centroContainer}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.containerCPF}>
            <Text style={styles.labelcpf}>Digite o CPF do comprador:</Text>
            <View style={styles.barrainput1}>
              <TextInput maxLength={13} underlineColorAndroid={'transparent'} style={styles.textInputCpf} onChangeText={(text) => this.setState({ text })}
                placeholder={'CPF'} keyboardType='numeric'>
              </TextInput>
            </View>
          </View>
          <View style={styles.containerValor}>
            <Text style={styles.labelcompra}>Digite o valor da compra:</Text>
            <View style={styles.barrainput2}>
              <Text style={styles.reais}>R$</Text>
              <TextInput underlineColorAndroid={'transparent'} style={styles.textInputValor}
                onChangeText={(text) => this.setState({ text })} keyboardType='numeric'
                placeholder={'Valor'} />
            </View>
          </View>
          <View style={styles.containerRegistro}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ visible: true });
              }}
              style={styles.botaoregistrar} >
              <Text style={{ fontSize: 16, color: 'white', top: 3, textAlign: 'center', fontFamily: 'System' }}>REGISTRAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View>
          <Modal
            animationType={"fade"}
            transparent={true}
            visible={this.state.visible}
            supportedOrientations={['portrait', 'landscape']}>
            <View style={styles.container1}>
              <View style={styles.caixadetexto}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={styles.textonivel}>Cliente Fíel</Text>
                    <Text style={styles.textonome}>{this.pessoa.nome}</Text>
                    <Text style={styles.idadeprofissao}>{this.pessoa.age},{this.pessoa.profission}</Text>
                  </View>
                  <Image style={styles.foto} resizeMode='stretch' source={{ uri: this.pessoa.imagem }} />
                </View>
                <Text style={styles.comprou}>Comprou</Text>
                <Text style={styles.valor}>{this.state.text}</Text>
                <View style={styles.containerRegistro}>
                  <TouchableOpacity
                    onPress={() => { this.setState({ visible: false }) }}
                    style={styles.botaoregistrar} >
                    <Text style={{ fontSize: 16, color: 'white', top: 2, textAlign: 'center', fontFamily: 'System' }}>CONFIRMAR</Text>
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
  centroContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCPF: {
    flex: 1
  },
  containerValor: {
    marginTop: 20
  },
  labelcpf: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 17,
    color: '#808080',
    fontFamily: 'System',
  },
  labelcompra: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    fontSize: 17,
    color: '#808080',
    fontFamily: 'System',
  },
  barrainput1: {
    marginHorizontal: 20,
    borderRadius: 100 / 2,
    height: 45,
    backgroundColor: '#F4F4F4',
  },
  textInputCpf: {
    bottom: 8,
    height: 60,
    left: 13,
    color: '#565656',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  textInputValor: {
    bottom: 7,
    height: 60,
    flex: 1,
    fontSize: 27,
    textAlign: 'left',
    color: '#60B293',
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  reais: {
    alignSelf: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: '#60B293',
    marginLeft: 10,
    marginRight: 5
  },
  barrainput2: {
    marginHorizontal: 20,
    borderRadius: 23,
    height: 45,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row'
  },
  container1: {
    flex: 1,
    height: altura,
    backgroundColor: 'rgba(0, 0, 0,0.50)',
  },
  caixadetexto: {
    marginTop: 40,
    padding: 20,
    borderRadius: 35,
    alignSelf: 'center',
    width: 300,
    backgroundColor: 'white',
  },
  foto: {
    borderRadius: 31,
    width: 62,
    height: 62,
    alignSelf: 'flex-end',
  },
  textonivel: {
    opacity: 0.61,
    color: '#2B2B2B',
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  textonome: {
    backgroundColor: 'transparent',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.87)',
  },
  idadeprofissao: {
    fontSize: 19,
    color: '#565656',
    backgroundColor: 'transparent',
  },
  comprou: {
    marginTop: 20,
    fontSize: 14,
    color: '#66B597',
    alignSelf: 'center',
  },
  valor: {
    fontSize: 38,
    color: '#66B597',
    alignSelf: 'center',
  },
  containerRegistro: {
    marginTop: 20,
    marginBottom: 20
  },
  botaoregistrar: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 130,
    height: 30,
    backgroundColor: '#60B293',
    borderRadius: 15,
  },
});