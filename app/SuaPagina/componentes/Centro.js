

import React, { Component } from 'react';

/*  
  Para utilizar esta biblioteca executei na pasta do projeto
  npm install react-native-pie-chart --save
*/

//Import para a construção dos gráficos.
import PieChart from 'react-native-pie-chart';


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';

const window = Dimensions.get('window');

export const altura_centro = (window.height)-170;

/* Início da Classe */
export default class Centro extends Component {

  // Construtor
  constructor(){
    super();
    this.state = {text:''};
  }


  render() {

    //Variáveis de dimensões para os gráficos

    const chart_wh = 80 // raio da circunferência do gráfico
    const cRadius = 0.8 // 80% do raio será eliminado, formando um anel.

    // Variáveis para manipulação da luminosidade da cor.
    const step = 5 // Os valores de porcentagem serão quebrados em pedaços de valor step
    const baseLight = 40 // Luminosidade inicial
    const finalLight = 70 // Luminosidade final
    const sat = 80 // Saturação 
    const scale = 2 // Define de quantas partes serão formados os gráficos e ajusta os falores de percentual

    var light = baseLight // Apenas passando o valor para uma variável para ser manipulada

    // Define incremento na luminosidade para os parâmetros anteriores
    const incLight = (finalLight - baseLight) / ((scale * 100) / step)

    // Percentuais para a loja.
    const percMulheres = 87 // Percentual de Mulheres
    const percJovens = 60 // Percentual de Jovens
    const percFieis  = 40 // Percentual de fieis

    // Variáveis para montar o gráfico
    var vMulheres = [] // Array de valores
    var colMulheres = [] // Array de cores

    var vJovens = [] 
    var colJovens = []

    var vFieis = []
    var colFieis = []

     
    // Função que insere os valores nas variáveis acima para 
    // serem entregues ao PieChart e assim desenhar os gráficos.
    // Recebe como parêntros a cor inicial, percentual, array de
    // valores vazio e array de cores vazio  
    function defineArray(colChart, perc, v, col){

      /*
        O valor da procentagem é quebrado em vários valores de tamanho step
        e inserido no array. As cores são inseridas no outro array e a cada
        iteração a luminosidade vai aumentando.
      */
      for(var i = perc; i >= step; i = i-step){
          
        v.push(step);
        col.push(hsl(colChart, sat, light, 0.8));

        light = incLight + light;
      }

      // Inserção do resto da divisão e de sua cor.
      v.push(i);
      col.push(hsl(colChart, sat, light, 0.8));

      // Valores para formar o resto da circunferência de cor clarinha ^^
      v.push((scale * 100) - perc);
      col.push(hsl(colChart, sat, 95, 0.8));

      // Voltando para a luminosidade inicial para
      // gerar o próximo gráfico
      light = baseLight;

  }

         
      // Chamando funções para definir os valores para cada tipo de gráfico.
      defineArray(0 ,percMulheres * scale, vMulheres, colMulheres);
      defineArray(120, percJovens * scale, vJovens, colJovens);
      defineArray(180, percFieis * scale, vFieis, colFieis);



    return (

      <View style={{height:altura_centro,}}>
        <ScrollView style={{flex: 1}}>

        
          <View style={{paddingTop: 15}}>
            <Text style={[styles.titulo, {top: 0}]}>Sumário da sua loja</Text>
            <View style={[styles.rectangle, {top: 5}]} />
          </View>
  
          <View style={[styles.viewMenor, {paddingTop: 25}]}>
            <Text style={styles.numeroazul}>120</Text>
            <Text style={styles.numeroazul}>40</Text>
            <Text style={styles.numeroazul}>30</Text>
          </View>

          <View style={[styles.viewMenor, {paddingTop: -15, width:330}]}>
            <Text style={styles.textoazul}>total clientes</Text>
            <Text style={styles.textoazul}>compras no mês</Text>
            <Text style={styles.textoazul}>clientes ativos</Text>
          </View>

          <View style={{paddingTop: -50}}>
            <Text style={[styles.titulo, {paddingTop: 10}]}>Conhecendo seus clientes</Text>
            <View style={[styles.rectangle, {top: 5}]} />
          </View>

        
          <View  style={{paddingTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>



            <View style={styles.container}>
                     
              <PieChart
                chart_wh={chart_wh}
                series={vMulheres}
                sliceColor={colMulheres}
                doughnut={true}
                coverRadius={cRadius}
                coverFill={'#FFF'}
              />

              <Text style={styles.percM}> {percMulheres}% </Text>
              <Text style={styles.title}>São Mulheres</Text>
          
            </View>

            <View style={styles.container}>
                     
              <PieChart
                chart_wh={chart_wh}
                series={vJovens}
                sliceColor={colJovens}
                doughnut={true}
                coverRadius={cRadius}
                coverFill={'#FFF'}
              />
              
              <Text style={styles.percJ}> {percJovens}% </Text>
              <Text style={styles.title}>Jovens  (20 - 38)</Text>
          
            </View>

            <View style={styles.container}>
                     
              <PieChart
                chart_wh={chart_wh}
                series={vFieis}
                sliceColor={colFieis}
                doughnut={true}
                coverRadius={cRadius}
                coverFill={'#FFF'}
              />
              <Text style={styles.percF}> {percFieis}% </Text>
              <Text style={styles.title}>São fidelizados</Text>
          
            </View>

          </View>
    
          <View style={[styles.viewMenor, {paddingTop: 20}]}>
            <Text style={styles.numeroazul}>70</Text>
            <Text style={styles.numeroazul}>30</Text>
            <Text style={styles.numeroazul}>20</Text>
          </View>
         
          <View style={[styles.viewMenor, {paddingTop: -15, width:330}]}>
            <Text style={styles.textoazul}>casuais</Text>
            <Text style={styles.textoazul}>fiés</Text>
            <Text style={styles.textoazul}>muito fiés</Text>
          </View>
 
        </ScrollView>

      </View>
    );
  }
}

/* Definição dos estilos dos componentes. */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  
  title: {
   color: '#000',
   width: 78,
   fontSize: 16,
   textAlign:'center',
   fontWeight: '400',
   marginTop: 30
  },
  
  percM: {
    color: hsl(0, 100, 40),
    marginTop: -60,
    fontSize: 23
  },

  percJ: {
    color: hsl(120, 100, 30),
    marginTop: -60,
    textAlign: 'center',
    fontSize: 23
  },

  percF: {
    color: hsl(180, 100, 30),
    marginTop: -60,
    fontSize: 23
  } ,

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
  fontSize: 35,
  textAlign:'center',
  fontWeight: '400',
  },
});
