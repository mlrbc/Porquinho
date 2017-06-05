import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Hr,
} from 'react-native';
import DetalheListagem from '../DetalheListagem';

const window = Dimensions.get('window');

export const altura_header = (window.height/5)-20;
export const altura_centro = (window.height)-170;
export const altura_footer = (window.height/8)-32;
export const altura = (window.height);
export const largura = (window.width);


export default class Centro extends Component {
  constructor(){
    super();
    this.state = {level1: styles.hidden, level2: styles.hidden, level3: styles.hidden, origin: styles.container, button: styles.hidden};

this.niveis = [
      {
        titulo: "Não fidelizados",
        total: '70',
        pessoas: [
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          }
        ]
      },
      {
        titulo: "Fiéis",
        total: '30',
        pessoas: [
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          }
        ]
      },
      {
        titulo: "Muito fiéis",
        total: '20',
        pessoas: [
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          },
          {
            nome: "Ana Júlia Torres",
            idade: '18',
            profissao: "Empresária",
            foto: "../imagens/ana.jpg"
          },
          {
            nome: "Letícia Mallemont",
            idade: '22',
            profissao: "Estudante",
            foto: "../imagens/leticia.jpg"
          },
          {
            nome: "Joana Darci",
            idade: '23',
            profissao: "Jornalista",
            foto: "../imagens/joana.jpg"
          },
          {
            nome: "Patrícia",
            idade: '30',
            profissao: "Estilista",
            foto: "../imagens/patricia.jpg"
          }
        ]
      }
    ];




  }

  listaConsumidores(pessoas) {
  var lista = pessoas.map(function(person, key) {
    return (
      <View>
        <View style = {styles.person_container}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image style = {styles.picture}
              source = {require("../imagens/patricia.jpg")}
              resizeMode = 'stretch' />
            
            <View style = {styles.person_data}>
              <Text style = {styles.person_name}>{person.nome}</Text>
              <Text style = {styles.person_info}>{person.idade + ", " + person.profissao}</Text>
            </View>
          </View>

          <Image style = {styles.details}
             source = {require("../seta.jpg")}
             resizeMode = 'stretch' />
            
        </View>              

        <View style = {styles.person_line} /> 
      </View>  
    );
  });
 
  return (
    <View style = {styles.people}>
      {lista}
    </View>
  );
}

 render() {

  var that = this;
 
  var lista = this.niveis.map(function(nivel, key) {
    var ball_style = "ball" + (key+1);
    var level_style = "level" + (key+1);
    var state = {origin: styles.hidden, button: styles.container};
    state [level_style] = styles.container;

    return (
      <View style = {styles.level_container}>
        <View style = {styles.level_title}>
           <View style = {styles[ball_style]}/>
           <Text style = {styles[level_style]}>{nivel.total + " " + nivel.titulo + ":"}</Text>
        </View>   

        {that.listaConsumidores(nivel.pessoas.slice(-4))}
        
        <TouchableOpacity style = {styles.button}
           onPress ={()=> {
            that.setState(state);
          }} >
           <Text style = {styles.button_text}>MAIS</Text>
        </TouchableOpacity>
      </View>  

    );
  });
 
  return (
    <View>  
      <View style = {this.state.origin}>
              <Text style = {styles.text_title}>Lista de clientes</Text>
              <View style = {styles.line_title} />
              {lista}
      </View>
      <View style = {this.state.button}>       
      <TouchableOpacity style = {styles.back_button}
        onPress ={() => {
          this.setState({level1: styles.hidden, level2: styles.hidden, level3: styles.hidden, origin: styles.container, button: styles.hidden});
        }} >
      <Image style = {styles.back_arrow}
        source = {require('../back_seta.jpg')}
        resizeMode = "stretch" />
      </TouchableOpacity>
      </View>
      <View style = {this.state.level1}>
        <DetalheListagem clientes = {{nivel: 1, dados:this.niveis[0]}}/>
      </View>
      <View style = {this.state.level2}>
        <DetalheListagem clientes = {{nivel: 2, dados:this.niveis[1]}}/>
      </View>
      <View style = {this.state.level3}>
        <DetalheListagem clientes = {{nivel: 3, dados:this.niveis[2]}}/>
      </View>
    </View>  

  );
}

}

const styles = StyleSheet.create({

  back_arrow: {
    
    height: 17,
    width: 17,

  },

  back_button: {
    marginTop: 14,
    marginLeft: 14,
    
    
  },

  hidden: {
    display: 'none',
  },
 
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  text_title: {
    marginLeft: 19,
    opacity: 0.72,
    color: '#000000',
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 24,
    marginTop: 21,
    flex: 1
  },

  line_title: {
    height: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#979797',
    marginLeft: 19,
    marginRight: 19,
    opacity: 0.38,
    flex: 1,
  },

  ball1: {

    backgroundColor: '#A1A1A1',
    borderRadius:100,
    width:24,
    height:24, 
    marginLeft: 7,
  },

  ball2: {
    backgroundColor: '#338285',
    borderRadius:100,
    width:24,
    height:24,
    marginLeft: 7,
  },

  ball3: {
    backgroundColor: '#F5A623',
    borderRadius:100,
    width:24,
    height:24,
    marginLeft: 7,
  },

  level_title: {
    flexDirection: 'row',
    flex: 1
  },
 
  level_container: {
    marginTop: 27,
    marginHorizontal: 19,
    flex: 1
  },

  level1: {
    color: '#A1A1A1',
    fontFamily: 'System',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 12,
    
  },

  level2: {
    color: '#338285',
    fontFamily: 'System',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 12,
   
  },

  level3: {
    color: '#F5A623',
    fontFamily: 'System',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 20,
    marginLeft: 12,
    
  },
 
  people: {
    marginTop: 10,
    
  },

  person_line: {
    height: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#979797',
    opacity: 0.10,
    marginTop: 10,
    flex: 1
  },

  person_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flex: 1
  },

  picture: {
    borderRadius:20,
    width:39,
    height:39, 
    
  },

  person_data: {
    marginLeft: 12,
    flex: 1
  },

  person_name: {
    color: '#000000',
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
 
  },

  person_info: {
    color: '#000000',
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 16,
  },

  details: {
    width: 8,
    height: 13,
    alignSelf: 'center'
  },
 
  button: {    
    height: 21,
    width: 59,
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 34,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  button_text: {
    fontSize: 13,
    textAlign: 'center',
   }, 

});

