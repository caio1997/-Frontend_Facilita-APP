import React, { useState } from 'react';
import { View, Image, Alert, Pressable } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);

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

  const notImplementation = () => {
    Alert.alert("Observação", "Função não implementada")
  };

  const realizarCastro = async () => {
    const params = {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        senha: password,
        nome: nome,
        telefone: telefone,
        localizacao: localizacao,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log(params)
    const response = await fetch('https://backend-facilita-pos-fe11a1083fc9.herokuapp.com/api/usuario/save', params)
    console.log(response)
    if (!response.ok) {
      Alert.alert("Aviso", "Sistema indisponível no momento - Cadastro não realizado")
    } else {
      return response.json()
    }
  };

  const cadastrar = () => {
    if (nome, telefone, email, password, localizacao !== null)
      realizarCastro().then(response => {
        console.log(response)
        navigation.reset({
          index: 0,
          routes: [{ name: "CadastroSucesso" }]
        })
      })
    else
      Alert.alert("Aviso", "Favor preencher os campos obrigatórios")
  };

  return (
    <View style={styles.principal}>

      <View style={{ height: '10%', alignItems: 'flex-end', right: 30, top: 10 }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 100, height: 100, resizeMode: 'contain' }} />

      </View>

      <View style={{ height: '10%', alignItems: 'flex-start', left: 20, top: 30 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 40, right: 0 }}>Cadastre-se</Text>
        <Image source={require('../assets/traco_verde.png')} />
      </View>

      <View style={{ height: '40%', alignItems: 'center', top: 80 }}>
        <Input
          placeholder="*Nome"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setNome(value)}
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Telefone"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setTelefone(value)}
          keyboardType="phone-pad"
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Email"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Localização"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setLocalizacao(value)}
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <View style={{ width: '100%', height: '100%', flexDirection: 'row' }}>
          <View style={{ width: '85%', flexDirection: 'row' }}>
            <Input
              placeholder="*Password"
              style={{ fontWeight: 'bold', color: 'black' }}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={passwordVisibility}
              returnKeyType="done"
              containerStyle={{ marginVertical: -5 }}
            />
          </View>
          <View style={{ height: '15%', flexDirection: 'row' }}>
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={{ height: '20%', alignItems: 'center', top: 60 }}>
        <Button
          title="Cadastrar"
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
            marginVertical: 10
          }}
          onPress={() => cadastrar()}
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

    </View>
  );
}


