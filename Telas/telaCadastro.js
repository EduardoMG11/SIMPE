import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Registro</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999"
        />
        <TextInput 
          style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor="#999"
        />
        <TextInput 
          style={styles.input}
          placeholder="CNPJ"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />
        <TextInput 
          style={styles.input}
          placeholder="Nome da empresa"
          placeholderTextColor="#999"
        />
        <TextInput 
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        <TextInput 
          style={styles.input}
          placeholder="Área de atuação"
          placeholderTextColor="#999"
        />
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput 
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TextInput 
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('telaHome')}
        >
          <Text style={styles.buttonText}>Registrar-se</Text>
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
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontFamily: 'System',
    fontSize: 28,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -50, 
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
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
    fontStyle: 'italic',
    fontSize: 16,
    color: '#6b6b9a', 
  },
});
