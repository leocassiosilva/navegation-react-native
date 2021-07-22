import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { MainButton } from '../components/MainButton';
 
export function Cursos({ navigation} ){
  return(
      <View style={styles.container}>     
        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>
              Cursos Superiores
          </Text>
        </View>

        <View>
            <MainButton style={styles.btn} title="Ads" onPress={() => navigation.navigate('Ads')}/>
            <MainButton style={styles.btn} title="Quimica" onPress={() => navigation.navigate('Quimica')}/>

        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  imgCampus:{
    height:320,
    width:450,
    alignItems:'center',
  }, 
  text:{
    padding:12, 
    textAlign:'justify'
  },
  textTitle:{
    padding:7, 
    fontWeight:'bold',
    textAlign:'center',
    fontSize:28
  }, 
  btn:{
    padding:10
  }
});