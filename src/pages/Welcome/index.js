import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: '90%', height: '90%' }}
          resizeMode='contain'
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101728', // Cor de fundo para o container principal
  },
  containerLogo: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101728', // Cor de fundo para o container do logo
  },
  title: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#d8d8d8',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    transform: [{ translateY: 50 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
