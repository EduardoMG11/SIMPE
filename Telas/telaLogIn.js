import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation();


  const cnpj = '12.345.678/0001-95'
  const email = 'eduardo@gmail.com'
  const senha = 'senha'

  const [inputCnpj, setInputCnpj] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');


  const login = () => {
    if (inputCnpj === cnpj && inputEmail === email && inputSenha === senha){
      navigation.navigate('telaHome');
    } else {
      Alert.alert('Insira os dados de log-in corretamente!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Entrar</Text>
      </View>
      
      <View style={styles.logContainer}>
        <TextInput 
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#999"
          value={inputCnpj}
          onChangeText={setInputCnpj}
        />
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          value={inputEmail}
          onChangeText={setInputEmail}
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={inputSenha}
          onChangeText={setInputSenha}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={login}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 20,
    paddingVertical: 40,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'System',
    fontSize: 28,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  logContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#eee',
    elevation: 5,
    borderColor: '#eee',
    borderRadius: 12,
    borderWidth: 2,
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 80,
    fontSize: 16,
    fontFamily: 'System',
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 16,
    color: '#6b6b9a', 
  },
});
