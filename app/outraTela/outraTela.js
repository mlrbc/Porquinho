import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


export default class outraTela extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {

    const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigate('TelaRegistro')}>
      <View style={{backgroundColor:'gray', alignSelf:'center',alignItems:'center',height: 150,width:100}}>
      <Text>VOLTA NUNES</Text>
      </View>
      </TouchableOpacity>


    );
  }
}
