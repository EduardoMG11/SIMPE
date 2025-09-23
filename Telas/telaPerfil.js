import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TelaPerfil(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.txt}>Seu perfil</Text>
            {/* Espaço para foto */}
            <View style={styles.caixa}>
                <Text style={styles.txtcaixa}>CNPJ: </Text>
                <Text style={styles.txtcaixa}>E-mail: </Text>
                <Text style={styles.txtcaixa}>Área de atuação: </Text>
                <Text style={styles.txtcaixa}>Está no SIMPE há: </Text>
                <Text style={styles.txtcaixa}>Número de parcerias: </Text>



            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20, 
        paddingTop: 60,
        paddingBottom: 40,
    },
    txt:{
        color: 'black',
        fontSize: 35,
        fontFamily: 'System',
        alignSelf: 'center',
    },
    caixa:{
        borderColor: '#e7e7e7ff',
        backgroundColor: '#e7e7e7ff',
        elevation: 15,
        borderRadius: 5, 
        borderWidth: 1,
        flex:1,
        alignSelf:'center',
        flexDirection: 'column',
        padding: 40,
        marginTop: 20
    },
    txtcaixa:{
        color: 'black',
        fontSize: 20,
        fontFamily: 'System',
        justifyContent: 'flex-end',
        padding: 15,
        
    }


})