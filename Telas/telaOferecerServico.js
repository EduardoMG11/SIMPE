import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Image, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function TelaAdicionarServico() {
  const [inputTitulo, setTitulo] = useState('');
  const [inputArea, setArea] = useState('');
  const [inputTroca, setTroca] = useState('');
  const [inputDescricao, setDescricao] = useState('');
  const [inputImagem, setImagem] = useState(null);

  const navigation = useNavigation();

  const registrarServico = () => {
    if (!inputTitulo || !inputArea || !inputTroca || !inputDescricao) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    const novoServico = {
      id: Math.random().toString(),
      nome: inputTitulo,
      descricao: inputDescricao,
      area: inputArea,
      troca: inputTroca,
      imagem: inputImagem
    };
    navigation.navigate('telaServicos', { novoServico });

    setTitulo()
    setArea()
    setTroca()
    setDescricao()
    setImagem()
  };

  const selecionarImagemMobile = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Você precisa permitir o acesso às imagens.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const selecionarImagemWeb = (event) => {
    const file = event.target.files[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setImagem(uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Adicionar Serviço</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Título do Serviço"
          placeholderTextColor="#999"
          value={inputTitulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Área de atuação do serviço"
          placeholderTextColor="#999"
          value={inputArea}
          onChangeText={setArea}
        />
        <TextInput
          style={styles.input}
          placeholder="O que deseja em troca?"
          placeholderTextColor="#999"
          value={inputTroca}
          onChangeText={setTroca}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição detalhada do serviço"
          placeholderTextColor="#999"
          value={inputDescricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />

        {Platform.OS === 'web' ? (
          <input
            type="file"
            accept="image/*"
            onChange={selecionarImagemWeb}
            style={{ marginVertical: 10 }}
          />
        ) : (
          <TouchableOpacity style={styles.button} onPress={selecionarImagemMobile}>
            <Text style={styles.buttonText}>
              {inputImagem ? "Imagem Selecionada" : "Selecionar Imagem"}
            </Text>
          </TouchableOpacity>
        )}

        {inputImagem && (
          <Image
            source={{ uri: inputImagem }}
            style={{ width: 200, height: 200, marginTop: 10, alignSelf: 'center', borderRadius: 8 }}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={registrarServico}>
          <Text style={styles.buttonText}>Registrar Serviço</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 20, paddingTop: 60, paddingBottom: 40 },
  header: { marginBottom: 40, paddingTop: 40 },
  title: { fontFamily: 'System', fontSize: 28, color: '#333', textAlign: 'center', marginBottom: 10 },
  formContainer: { flex: 1, justifyContent: 'flex-start', paddingHorizontal: 10 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'System',
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonContainer: { paddingHorizontal: 10, paddingTop: 20 },
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
    marginBottom: 30,
  },
  buttonText: { fontFamily: 'System', fontSize: 16, color: '#6b6b9a' },
});
