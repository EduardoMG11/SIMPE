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

export default function TelaHome() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>M</Text>
          </View>
          <Text style={styles.username}>marceneiro XYZ</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="search" size={28} color="#grey" />
          <Text style={styles.menuText}>
           Pesquisar{'\n'}empresas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('telaOferecerServico')}>
          <Ionicons name="document-text-outline" size={28} color="#grey" />
          <Text style={styles.menuText}>Ofereça um{'\n'}serviço</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="briefcase-outline" size={28} color="#grey" />
          <Text style={styles.menuText}>
            Empresas interessadas{'\n'}em{'\n'}você{'\n'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="people-outline" size={28} color="#grey" />
          <Text style={styles.menuText}>Comunidade{'\n'}Empresarial</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Visite sua negociação mais recente, conclua ela!
        </Text>

        <TouchableOpacity style={styles.businessCard}>
          <View style={styles.businessAvatar}>
            <Text style={styles.businessAvatarText}>M</Text>
          </View>
          <View style={styles.businessInfo}>
            <Text style={styles.businessName}>metalúrgica 123</Text>
            <Text style={styles.businessDescription}>
              metalúrgica 123 fez uma oferta de chapas de ferro por 10
              prateleiras de estoque, o que acha?
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Veja como está sua última postagem na comunidade!
        </Text>

        <TouchableOpacity style={styles.postCard}>
          <View style={styles.postAvatar}>
            <Text style={styles.postAvatarText}>M</Text>
          </View>
          <View style={styles.postInfo}>
            <Text style={styles.postAuthor}>marceneiro XYZ</Text>
            <Text style={styles.postContent}>
              Bom dia! Depois da criação desse aplicativo consegui fazer muitos
              negócios fácil! Concordam?
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          Negocie novamente com essa empresa!
        </Text>

        <TouchableOpacity style={styles.companyCard}>
          <View style={styles.companyAvatar}>
            <Text style={styles.companyAvatarText}>E</Text>
          </View>
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>Empresa de TI Ltda</Text>
            <Text style={styles.companyDescription}>
              5 prateleiras por conserto de computadores.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontFamily: 'System',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    fontFamily: 'System',
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  settingsButton: {
    padding: 5,
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 10,
  },
  menuItem: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  menuText: {
    fontFamily: 'System',
    fontSize: 12,
    color: '#grey',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 12,
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  businessCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  businessAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  businessAvatarText: {
    fontFamily: 'System',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  businessInfo: {
    flex: 1,
  },
  businessName: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  businessDescription: {
    fontFamily: 'System',
    fontSize: 12,
    color: '#grey',
    lineHeight: 16,
  },
  postCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  postAvatarText: {
    fontFamily: 'System',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postInfo: {
    flex: 1,
  },
  postAuthor: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  postContent: {
    fontFamily: 'System',
    fontSize: 12,
    color: '#grey',
    lineHeight: 16,
  },
  companyCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  companyAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#9B59B6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  companyAvatarText: {
    fontFamily: 'System',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  companyDescription: {
    fontFamily: 'System',
    fontSize: 12,
    color: '#grey',
    lineHeight: 16,
  },
});
