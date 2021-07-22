import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
 
export function Ads({ navigation} ){
  return(
      <View style={styles.container}>
        <View>
        <Image
              source={require('../../img/ads.png')}
              style={styles.imgCampus}
          /> 
        </View>
        <View>

        <Text style={styles.textTitle}>
            Identificação do Curso
        </Text>
        <Text style={styles.text}>
            Curso Superior de Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS) é uma oferta presencial do Campus Pau dos Ferros do IFRN, situado na BR 405, KM 154, Bairro Chico Cajá, Pau dos Ferros/RN. O projeto pedagógico do curso foi aprovado pela Resolução nº 16/2012-CONSUP/IFRN de 01/03/2012.
        </Text>


        <Text style={styles.textTitle}>
            Sobre o Curso
        </Text>
        <Text style={styles.text}>
        O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação deste profissional.

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
    height:120,
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
    textAlign:'center'
  }
});