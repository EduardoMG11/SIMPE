import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './Telas/telaInicial';
import TelaCadastro from './Telas/telaCadastro';
import TelaLogIn from './Telas/telaLogIn';
import TelaHome from './Telas/telaHome';
import TelaServicos from './Telas/telaServicos';
import TelaOferecerServico from './Telas/telaOferecerServico';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="telaInicial" 
          component={TelaInicial} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="telaHome" 
          component={TelaHome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="telaCadastro" 
          component={TelaCadastro} 
          options={{ headerShown: true, headerTitle: '' }} 
        />
        <Stack.Screen 
          name="telaLogIn" 
          component={TelaLogIn} 
          options={{ headerShown: true, headerTitle: '' }} 
        />
        <Stack.Screen 
          name="telaServicos" 
          component={TelaServicos} 
          options={{ headerShown: true, headerTitle: '' }} 
        />
        <Stack.Screen 
          name="telaOferecerServico" 
          component={TelaOferecerServico} 
          options={{ headerShown: true, headerTitle: '' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
