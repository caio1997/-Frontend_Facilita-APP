import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Cadastro({navigation}) {
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);

  const notImplementation = () => {
    Alert.alert("Observação", "Função não implementada")
  };

  const cadastrar = () => {
    if(nome, telefone, email, password, localizacao !== null)
      navigation.reset({
      index: 0,
      routes: [{name: "CadastroSucesso"}]
    })
    else
      Alert.alert("Aviso", "Favor preencher os campos obrigatórios")
  };

  return (
    <View style={styles.principal}> 

      <View style={{height: '10%', alignItems: 'flex-end', right: 30, top: 10}}>
              <Image source={require('../assets/logo_facilita.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>

        </View>

        <View style={{height: '10%', alignItems: 'flex-start', left: 20, top: 30}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40, right: 0}}>Cadastre-se</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>

      <View style={{height: '40%', alignItems: 'center', top: 80}}>
      <Input
        placeholder="*Nome"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setNome(value)}
        returnKeyType="done"
        containerStyle={{marginVertical: -5}}
      />

      <Input
        placeholder="*Telefone"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setTelefone(value)}
        keyboardType="phone-pad"
        returnKeyType="done"
        containerStyle={{marginVertical: -5}}
      />

      <Input
        placeholder="*Email"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        returnKeyType="done"
        containerStyle={{marginVertical: -5}}
      />

      <Input
        placeholder="*Password"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
        returnKeyType="done"
        containerStyle={{marginVertical: -5}}
      />

       <Input
        placeholder="*Localização"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setLocalizacao(value)}
        returnKeyType="done"
        containerStyle={{marginVertical: -5}}
      />
      </View>


      

      <View style={{height: '20%', alignItems: 'center', top: 60}}>
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


