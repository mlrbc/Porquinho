
import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class DetalheListagem extends Component {
  constructor() {
    super();    
  }


render() {
	var nivel = this.props.clientes.nivel;
	var dadosClientes = this.props.clientes.dados;

	var ball_style = "ball" + nivel;
	var level_style = "level" + nivel;
	var level_text = dadosClientes.total + " " + dadosClientes.titulo + ":";

	var clientes = dadosClientes.pessoas.map(function(person) {
		return(
			<View>
				<View style = {styles.person_container}>
					<View style = {styles.person_summary}>
						<View style = {styles.picture}>
							<Image style = {styles.picture}
								source = {require("./imagens/ana.jpg")}
								resizeMode = "stretch" />
						</View>

						<View style = {styles.person_data}>
							<Text style = {styles.person_name}>{person.nome}</Text>
							<Text style = {styles.person_info}>{person.idade + ", " + person.profissao}</Text>
						</View>
					</View>

					<Image style = {styles.details}
						source = {require("./seta.jpg")}
						resizeMode = "stretch"/>

				</View>

				<View style = {styles.person_line} />
			</View>
		);	
	});

	return (
		<View>
			<View style = {styles.container}>
				<Text style = {styles.text_title}>Clientes {dadosClientes.titulo.toLowerCase()}</Text>
				<View style = {styles.line_title} />

				<View style = {styles.level_container}>
					<View style = {styles.level_title}>
						<View style = {styles[ball_style]} />
						<Text style = {styles[level_style]} >{level_text}</Text>
					</View>

					<View style = {styles.people}>
						{clientes}
					</View>
				</View>
			</View>
		</View>
	);
}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},

	text_title: {
		opacity: 0.72,
		color: '#000000',
		fontFamily: 'System',
		fontSize: 22,
		fontWeight: 'bold',
		lineHeight: 24,
		marginTop: 21,
		marginHorizontal: 19,
		flex: 1,
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

	level_container: {
		marginVertical: 20,
		marginHorizontal: 19,
		flex: 1
	},

	level_title: {
		flexDirection: 'row',
		flex: 1
	},

	ball1: {
		backgroundColor: '#A1A1A1',
		borderRadius: 100,
		width: 24,
		height: 24,
		marginLeft: 7,
	},

	ball2: {
		backgroundColor: '#338285',
		borderRadius: 100,
		width: 24,
		height: 24,
		marginLeft: 7,
	},

	ball3: {
		backgroundColor: '#F5A623',
		borderRadius: 100,
		width: 24,
		height: 24,
		marginLeft: 7,
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
		marginTop: 5,
		
	},

	person_container: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginTop: 10,
		marginLeft: 1,
		flex: 1,
	},

	picture: {
		position: 'absolute',
		borderRadius: 20,
		width: 39,
		height: 39,
		flex: 1,
	},

	person_data: {
		flexDirection: 'column',
		flex: 1,
	},

	person_name: {
		color: '#000000',
		fontFamily: 'System',
		fontSize: 16,
		fontWeight: '500',
		lineHeight: 19,
		marginLeft: 50,
	},

	person_info: {
		color: '#000000',
		fontFamily: 'System',
		fontSize: 14,
		fontWeight: '300',
		lineHeight: 16,
		marginLeft: 50,
	},

	details: {
		display: 'none',
		width: 8,
		height: 13,
		alignSelf: 'flex-end',
		position: 'absolute',
		marginTop: 12,
	},

	person_line: {
		height: 0,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#979797',
		opacity: 0.10,
		marginTop: 10,
		flex: 1,
	},

});