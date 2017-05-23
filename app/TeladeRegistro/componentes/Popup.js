import React,{ Component } from 'react';
import {
  Modal,
  Dimensions,
  StyleSheet,
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

const window = Dimensions.get('window');

export const altura = (window.height);
export const largura = (window.width);

export default class Popup extends Component {
  constructor(props){
    super(props);
    this.state = {visible:this.props.config.visible};
  }


  render() {
    return (

      <Modal
          animationType={"slide"}
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
              <Text style={styles.textonome}>{this.props.config.name}</Text>
              <Text style={styles.idadeprofissao}>{this.props.config.ageprofission}</Text>
              <Text style={styles.comprou}>Comprou</Text>
              <Text style={styles.valor}>{this.props.config.value}</Text>
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


    );
  }
}

const styles = StyleSheet.create({
  container1:{
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
