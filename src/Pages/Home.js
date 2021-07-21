import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { MainButton } from '../components/MainButton';
 
export function Home({ navigation} ){
  return(
      <View style={styles.container}>
        <View style={styles.imgLogo}>
          <Image
              source={require('../img/logo.png')}
              style={styles.logo}
          />  
          <Text style={styles.textLogo}>
              Pau dos Ferros
          </Text>
        </View>

        <View>
        <MainButton title="Sobre" onPress={() => navigation.navigate('Sobre')}/>

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgLogo:{
    height:200,
    width:'100%',
    alignItems:'center',
  },
  logo:{
    height:132,
    width:88,
    alignItems:'center'
  }, 
  textLogo:{
    paddingTop:20,
    fontSize:30
  }
});