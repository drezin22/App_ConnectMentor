
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
   <Text style={styles.title}>E-mail</Text>
   <TextInput
   placeholder="Digite um e-mail..."
   style={styles.input}
   />

<Text style={styles.title}>Senha</Text>
   <TextInput
   placeholder="Sua senha"
   style={styles.input}
   />

   <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Acessar</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('Cadastro')}>
    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
   </TouchableOpacity>


   </Animatable.View>

    {/* Adição da imagem no canto superior direito */}
    <Image
        source={require('../../assets/Logo2.png')} // Substitua 'sua_imagem.png' pelo caminho da sua imagem
        style={styles.imageStyle}
        resizeMode="contain"
      />


        </View>
    );
}
        
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: "#101728"
},
containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    },
    message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF'
    },
    containerForm:{
    backgroundColor: '#FFF',
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
    },
title:{
fontSize: 20,
marginTop: 28,
},
input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
},
button:{
    backgroundColor: "#D3E2EF",
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
},
buttonText:{
color: "#101728",
fontSize: 15,
fontWeight: 'bold'
},
buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
},
registerText:{
color: 'a1a1a1'

},
imageStyle: {
    position: 'absolute',
    top: 50, // Ajuste a posição vertical conforme necessário
    right: 20, // Ajuste a posição horizontal conforme necessário
    width: 100, // Ajuste a largura da imagem
    height: 50, // Ajuste a altura da imagem
  }


})
