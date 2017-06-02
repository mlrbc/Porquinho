import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');


export const altura_centro = (window.height)-170;



export default class Centro extends Component {
  constructor(){
    super();
    this.state = {text:''};


  }


  render(){

    return(
      <View style={{height:altura_centro,}}>
		  <View style={{top: 25}}>
		  	<Text style={[styles.titulo, {top: 0}]}>Sumário da sua loja</Text>
		  	<View style={[styles.rectangle, {top: 5}]} />
		  </View>
		  <View style={[styles.viewMenor, {top: 45}]}>
		  	<Text style={styles.numeroazul}>120</Text>
		  	<Text style={styles.numeroazul}>40</Text>
		  	<Text style={styles.numeroazul}>30</Text>
		  </View>
		  <View style={[styles.viewMenor, {top: -15, width:330}]}>
		  	<Text style={styles.textoazul}>total clientes</Text>
		  	<Text style={styles.textoazul}>compras no mês</Text>
		  	<Text style={styles.textoazul}>clientes ativos</Text>
		  </View>
		  <View style={{top: -50}}>
		  	<Text style={[styles.titulo, {top: 0}]}>Conhecendo seus clientes</Text>
		  	<View style={[styles.rectangle, {top: 5}]} />
		  </View>
		  
		  <View style={[styles.viewMenor, {top: 100}]}>
		  	<Text style={styles.numeroazul}>70</Text>
		  	<Text style={styles.numeroazul}>30</Text>
		  	<Text style={styles.numeroazul}>20</Text>
		  </View>
		  <View style={[styles.viewMenor, {top: 40, width:330}]}>
		  	<Text style={styles.textoazul}>casuais</Text>
		  	<Text style={styles.textoazul}>fiés</Text>
		  	<Text style={styles.textoazul}>muito fiés</Text>
		  </View>
		  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  viewMenor:{
	flex: 1,
	flexDirection: 'row',
	alignSelf:'center',
	justifyContent: 'space-between',
	width:350,
  },
    titulo:{
  	left: 30,
	opacity: 0.75,
	color: '#000000',
	fontSize:22,
	textAlign:'left',
	fontWeight: 'bold',
  },
  rectangle: {
    width: 360,
    height: 1,
    alignSelf:'center',
    backgroundColor: '#000000',
    opacity: 0.25,
  },
  textoazul:{
  	width: 78,
	color: '#4A90E2',
	fontSize: 17,
	textAlign:'center',
	fontWeight: '400',
  },
  numeroazul:{
  	width: 100,
	color: '#4A90E2',
	fontSize: 45,
	textAlign:'center',
	fontWeight: '400',
  },
});
