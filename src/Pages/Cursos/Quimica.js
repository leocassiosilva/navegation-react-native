import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
 
export function Quimica({ navigation} ){
  return(
      <View style={styles.container}>
        <View>
        <Image
              source={require('../../img/quimica.png')}
              style={styles.imgCampus}
          /> 
        </View>
        <View>

        <Text style={styles.textTitle}>
            Sobre o Curso
        </Text>
        <Text style={styles.text}>
        O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico (detergentes, cosméticos, outros), de insumos agrícolas (fertilizantes e defensivos), insumos industriais (corantes, estabilizantes, conservantes, aromatizantes e aditivos em geral para conferir propriedades específicas a certos produtos ou materiais), matérias-primas (solventes, plásticos, borrachas e produtos químicos em geral); o controle de qualidade de matérias-primas e produtos para que os produtos finais atinjam as especificações impostas pelo mercado ou pelos órgãos oficiais de controle sanitário; o tratamento de efluentes industriais, visando a proteção do meio ambiente e o reaproveitamento de subprodutos. Pode atuar também em outras áreas relacionadas aos processos produtivos. Possibilidades de atuação: instituições de ensino, incluindo as de Educação Básica, como professor; em indústrias químicas, petroquímicas, de alimentos e bebidas, de papel e celulose, de cerâmica, de fármacos, têxtil, de pigmentos e tintas, de plásticos e cimento; na área comercial, com vendas, representação e assistência técnica.
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