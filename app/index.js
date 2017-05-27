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
         height:6,
         backgroundColor: '#E6E600',
       },
       iconStyle:{
          height: 85,
          width: 70,
       },
       tabStyle:{
         height:70,
         backgroundColor: 'rgba(255, 255, 255,0)',
       },
     },
   });

export default SimpleApp;
