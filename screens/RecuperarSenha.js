import { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function RecuperarSenha({navigation}) {
  const [email, setEmail] = useState(null);

  const enviarEmail = () => {
    if(email !== null)
      navigation.reset({
      index: 0,
      routes: [{name: "EmailEnviado"}]
    })
    else
      Alert.alert("Aviso", "Favor preencher os campos obrigatórios")
  };


  return (
    <View style={styles.principal}>

      <View style={{height: '30%', alignItems: 'center'}}>
            <Image source={require('../assets/logo_facilita.png')} style={{width: 210, height: 210, resizeMode: 'contain', top: 30}}/>
      </View>

      <View style={{height: '20%', alignItems: 'flex-start', left: 20, top: 70}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 35}}>Esqueci minha senha</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>

      <View style={{height: '20%', alignItems: 'center', top: 40}}>
      <Input
        placeholder="Email"
        style={{fontWeight: 'bold', color: 'black'}}
        onChangeText={(value) => setEmail(value)}
        keyboardType="email-address"
        returnKeyType="done"
      />

<View style={{height: '10%', alignItems: 'center'}}>
      <Text style={{top: 20, fontWeight: 'bold', fontSize: 15}}>Você receberá em instantes um </Text>
      <Text style={{top: 20, fontWeight: 'bold', fontSize: 15}}>e-mail para a recuperação da senha</Text>
      </View>
      </View>
      

      <View style={{height: '20%', alignItems: 'center', top: 50}}>
<Button
              title="Enviar e-mail"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 60,
                width: 300,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 30, color: 'black'}}
              containerStyle={{
                height: 60,
                width: 300
              }}
              onPress={() => enviarEmail()}
            />
      </View>
    </View>
  );
}


