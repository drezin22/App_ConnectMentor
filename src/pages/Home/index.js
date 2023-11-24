
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image 
            source={require('../../assets/banner.jpeg')}
            style= {styles.image}
            />

        <View style={styles.textContainer}>
        <Text style={styles.text}></Text>
        <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
         <MaterialIcons
         name="filter-list"
         size={24}
         color="#0000CD"
         />

        </TouchableOpacity>
        </View>
        </View>
        

        <View style={styles.line}/>

        
        <ScrollView>
        <View style={{ height: 20 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/imagem-paineldr.png')}/>
        <Image style={{width: 150, height: 150}} source={require('../../assets/imagem-paineldr.png')}/>
        </View>
        <View style={{ height: 50 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/cr.png')}/>
        <Image style={{width: 150, height: 150}} source={require('../../assets/cr.png')}/>
        </View>
        <View style={{ height: 50 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/raio-x.png')}/>
        <Image style={{width: 150, height: 150}} source={require('../../assets/raio-x.png')}/>
        </View>
        <View style={{ height: 50 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image style={{width: 150, height: 150}} source={require('../../assets/raio-x2.png')}/>
        <Image style={{width: 150, height: 150}} source={require('../../assets/raio-x2.png')}/>
        </View>


        </ScrollView>

        


        </View>
    );
} 

const styles = StyleSheet.create({

container:{
flex: 1,
width: '100%',
backgroundColor: '#FFF'
},
header:{
    marginBottom: 8
},
image:{
    width: '100%', // Defina a largura desejada da imagem
    height: 70,
},
textcontainer:{
  flexDirection: 'row',
  marginVertical: '5%',
  marginHorizontal: '5%'
},
text: {
   fontFamily: 'Anton_400Regular',
   fontSize: 20,
   marginHorizontal: '1%',
   color: '#0000CD'
},
line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 2,
}

});