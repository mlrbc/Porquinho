import React from 'react';
import TelaRegistro from './TeladeRegistro/TelaRegistro';
import SuaPagina from './SuaPagina/SuaPagina';
import Listagem from './Listagem/Listagem';
import outraTela from './outraTela/outraTela';
import { TabNavigator } from 'react-navigation';

{/*Configuração da pilha de telas, ao criar uma tela nova adicionar nesta lista.*/}

const SimpleApp = TabNavigator(

  {SuaPagina: {screen: SuaPagina},
   Listagem: {screen: Listagem},
   TelaRegistro: {screen: TelaRegistro},
   outraTela: {screen: outraTela},
  }, {
    tabBarPosition: 'bottom',
     tabBarOptions: {
       activeTintColor: '#F00',
       showIcon: true,
       showLabel: false,
       pressOpacity: 4.9,
       labelStyle:{
        color: 'black',
        fontSize: 12,
       },
       style:{
         backgroundColor: 'white',
       },
       indicatorStyle:{
         height:0,
         backgroundColor: '#E6E600',
       },
       iconStyle:{
          width: 85,
          height: 60,
          color: 'red'
       },
       tabStyle:{
         height:70,
         backgroundColor: 'rgba(255, 255, 255,0)',
       },
     },
   });

export default SimpleApp;
