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
       inactiveBackgroundColor: 'gray',
       pressOpacity: 2,
       labelStyle:{
        color: 'black',
        fontSize: 12,
       },
       style:{
         backgroundColor: 'white',
       },
       indicatorStyle:{
         backgroundColor: 'yellow',
       },
       iconStyle:{
          height: 85,
          width: 70,
       },
       tabStyle:{
         height:70,
         backgroundColor: 'white',
       },
     },
   });

export default SimpleApp;
