import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function MainButton ({onPress}){
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.texto}>Iniciar</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    
    btn:{
        backgroundColor:'#404146',
        height:45,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
   
    texto:{
        fontSize:20,
        color:'white'
    },
});