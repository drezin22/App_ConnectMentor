
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

   <Animatable.View animation="fadeInUp" style={styles.containerForm}>
   <Text style={styles.title}>Nome Completo</Text>
   <TextInput
   placeholder="Digite seu nome..."
   style={styles.input}
   />

<Text style={styles.title}>E-mail</Text>
   <TextInput
   placeholder="Digite seu e-mail..."
   style={styles.input}
   />

<Text style={styles.title}>Trabalho</Text>
   <TextInput
   placeholder="Digite seu cargo..."
   style={styles.input}
   />

<Text style={styles.title}>Senha</Text>
   <TextInput
   placeholder="Digite sua senha..."
   style={styles.input}
   />

<Text style={styles.title}>Confirmação de Senha</Text>
   <TextInput
   placeholder="Digite sua senha novamente..."
   style={styles.input}
   />

   <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Home')}>
    <Text style={styles.buttonText}>Cadastrar</Text>
   </TouchableOpacity>


   </Animatable.View>


        </View>
    );
}
        
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: "#0000CD"
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
color: "#0000CD",
fontSize: 15,
fontWeight: 'bold'
},
buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
},
registerText:{
color: 'a1a1a1'

}


})
