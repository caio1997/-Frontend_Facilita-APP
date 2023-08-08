import { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Login({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const entrar = () => {
    if(email, password !== null)
      navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
    else
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

      <View style={{height: '30%', alignItems: 'center'}}>
            <Image source={require('../assets/logo_facilita.png')} style={{width: 200, height: 200, resizeMode: 'contain', top: 10}}/>
      </View>

      <View style={{height: '20%', alignItems: 'center'}}>
      <Input
        placeholder="Email"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        returnKeyType="done"
      />
      <Input
        placeholder="Password"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        returnKeyType="done"
      />
      </View>

      <View style={{height: '30%', alignItems: 'center'}}>
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

	 
<View style={{height: '10%', alignItems: 'center'}}>
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


