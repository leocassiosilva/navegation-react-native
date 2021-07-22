import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function MainButton ({title, onPress}){
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.texto}>{title}</Text>
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
        margin:10
    },
   
    texto:{
        fontSize:20,
        color:'white'
    },
});