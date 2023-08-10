import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from './screens/Inicial'
import Login from './screens/Login'
import Principal from './screens/Principal'
import Cadastro from './screens/Cadastro'
import CadastroSucesso from './screens/CadastroSucesso'
import Menu from './screens/Menu'
import Sair from './screens/Sair'
import Informacoes from './screens/Informacoes'
import Product from './screens/Product'
import RecuperarSenha from './screens/RecuperarSenha'
import EmailEnviado from './screens/EmailEnviado'
import Anunciar from './screens/Anunciar'
import PublicarAnuncio from './screens/PublicarAnuncio'
import AnuncioPublicado from './screens/AnuncioPublicado'
import MeusAnuncios from './screens/MeusAnuncios'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="CadastroSucesso" component={CadastroSucesso} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Sair" component={Sair} />
      <Stack.Screen name="Informacoes" component={Informacoes} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="EmailEnviado" component={EmailEnviado} />
      <Stack.Screen name="Anunciar" component={Anunciar} />
      <Stack.Screen name="PublicarAnuncio" component={PublicarAnuncio} />
      <Stack.Screen name="AnuncioPublicado" component={AnuncioPublicado} />
      <Stack.Screen name="MeusAnuncios" component={MeusAnuncios} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}