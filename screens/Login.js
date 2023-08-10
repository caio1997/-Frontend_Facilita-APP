import { useState, useEffect } from 'react';
import { View, Image, Alert, Pressable } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const logar = async () => {
    const params = {
      method: 'POST',
      headers: { 'senha': password, 'email': email }
    };
    const response = await fetch('https://backend-facilita-pos-fe11a1083fc9.herokuapp.com/api/usuario/login', params)
    if (!response.ok) {
      Alert.alert("Aviso", "Sistema indisponível no momento")
    } else {
      return response.json()
    }
  };

  const entrar = () => {
    if (email, password !== null) {
      logar().then(response => {
        if (response.id == null) {
          Alert.alert('Login inválido', 'Usuário não encontrado ou senha incorreta')
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "Principal", params: { idClient: response.id, localizacao: response.localizacao } }]
          })
        }
      })
    } else
      Alert.alert("Aviso", "Favor preencher os campos obrigatórios")
  };

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  };

  const notImplementation = () => {
    Alert.alert("Observação", "Função não implementada")
  };

  const recuperarSenha = () => {
    navigation.navigate("RecuperarSenha")
  };

  return (
    <View style={styles.principal}>

      <View style={{ height: '30%', alignItems: 'center' }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 200, height: 200, resizeMode: 'contain', top: 10 }} />
      </View>

      <View style={{ height: '20%', alignItems: 'center' }}>
        <Input
          placeholder="Email"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
          returnKeyType="done"
        />

        <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
          <View style={{ width: '85%', flexDirection: 'row', top: 20 }}>
            <Input
              placeholder="Password"
              style={{ fontWeight: 'bold', color: 'black' }}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={passwordVisibility}
              returnKeyType="done"
            />
          </View>
          <View style={{ height: '15%', flexDirection: 'row', top: 20, left: 0 }}>
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ height: '30%', alignItems: 'center' }}>
        <Button
          title="Entrar"
          buttonStyle={{
            backgroundColor: 'rgba(183, 223, 190, 1)',
            borderRadius: 5,
            height: 60,
            width: 300,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}
          containerStyle={{
            marginHorizontal: 0,
            height: 60,
            width: 300,
            marginVertical: 20
          }}
          onPress={() => entrar()}
        />

        <Text>
          OU
        </Text>

        <Button
          title="Cadastre-se com Facebook"
          buttonStyle={{
            backgroundColor: 'rgba(72, 90, 150, 1)',
            borderRadius: 5,
            height: 35,
            width: 280,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}
          containerStyle={{
            height: 35,
            width: 280,
            marginVertical: 10
          }}
          onPress={() => notImplementation()}
        />

        <Button
          title="Cadastre-se com Google"
          type="outline"
          buttonStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 5,
            borderColor: 'black',
            height: 35,
            width: 280,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 14, color: 'black' }}
          containerStyle={{
            marginHorizontal: 0,
            height: 35,
            width: 280,
            marginVertical: 5
          }}
          onPress={() => notImplementation()}
        />

      </View>


      <View style={{ height: '10%', alignItems: 'center' }}>
        <Button
          title="Esqueci minha senha"
          type="clear"
          buttonStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 5,
            borderColor: 'black',
            height: 35,
            width: 280,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}
          containerStyle={{
            marginHorizontal: 0,
            height: 35,
            width: 280,
            marginVertical: 10
          }}
          onPress={() => recuperarSenha()}
        />

        <Text>Não tem conta ainda: </Text>
        <Button
          title="Cadastre-se"
          onPress={() => cadastrar()}
          type="clear"
          buttonStyle={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 5,
            borderColor: 'black',
            height: 35,
            width: 300,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 15, color: 'green' }}
          containerStyle={{
            marginHorizontal: 0,
            height: 35,
            width: 300,
            marginVertical: 5
          }}
        />
      </View>


    </View>
  );
}


