import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

export default function TelaServicos({ navigation, route }) {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    if (route.params?.novoServico) {
      setServicos(lista => [...lista, route.params.novoServico]);
    }
  }, [route.params?.novoServico]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seus serviços</Text>
      <FlatList
        style={styles.lista}
        data={servicos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Área de atuação: {item.area}</Text>
            <Text>Deseja em troca: {item.troca}</Text>
            {item.imagem && (
              <Image
                source={{ uri: item.imagem }}
                style={{ width: 200, height: 200, marginTop: 10, borderRadius: 8 }}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eeeeee', paddingHorizontal: 10, paddingTop: 20 },
  texto: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  lista: { paddingBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 10, elevation: 2 },
  nome: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
});
