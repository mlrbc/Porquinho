import React from 'react';
import TelaRegistro from './TeladeRegistro/TelaRegistro';
import outraTela from './outraTela/outraTela';
import { StackNavigator } from 'react-navigation';

{/*Configuração da pilha de telas, ao criar uma tela nova adicionar nesta lista.*/}

const SimpleApp = StackNavigator(
  {TelaRegistro: {screen: TelaRegistro},
   outraTela: {screen: outraTela},
   });

export default SimpleApp;
