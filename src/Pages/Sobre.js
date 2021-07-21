import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { MainButton } from '../components/MainButton';
 
export function Sobre({ navigation} ){
  return(
      <View style={styles.container}>
        <View>
        <Image
              source={require('../img/campus.jpg')}
              style={styles.imgCampus}
          /> 
        </View>
        <View>
        <Text style={styles.textTitle}>
                Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte | Pau dos Ferros
        </Text>
        <Text style={styles.textTitle}>
              BR 405, KM 154, S/N, Bairro Chico Cajá, Pau dos Ferros/RN, CEP 59900-000, CNPJ: 10.877.412/0006-72 Coordenação de Comunicação Social e Eventos (COCSEV) Horário de atendimento: 9h às 12h e 14h às 18h (segunda a sexta-feira)
              E-mail: comunicacao.pf@ifrn.edu.br
              Telefone: (84) 4005 4109
        </Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imgCampus:{
    height:320,
    width:450,
    alignItems:'center',
  }, 
  textTitle:{
    padding:10
  }
});