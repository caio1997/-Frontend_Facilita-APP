import { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function EmailEnviado({navigation}) {

  const retornar = () => {
      Alert.alert("Observação", "O e-mail não será enviado!")
      navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  };


  return (
    <View style={styles.principal}>

    <View style={{height: '8%', alignItems: 'flex-start', left: 20}}>
      <Button title="<" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30}}
          style={{}}
          onPress={() => retornar()}
        />
        </View>

      <View style={{height: '30%', alignItems: 'center'}}>
            <Image source={require('../assets/logo_facilita.png')} style={{width: 210, height: 210, resizeMode: 'contain', top: 40}}/>
      </View>

      <View style={{height: '20%', alignItems: 'flex-start', left: 20, top: 90}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 35}}>Acesse sua conta</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>


      <View style={{height: '20%', alignItems: 'center', top: 80}}>
      <Text style={{fontSize: 20}}>E-mail enviado com sucesso!</Text>
      </View>

       <View style={{height: '20%', alignItems: 'center', top: 50}}>
       <Text style={{fontWeight: 'bold', fontSize: 15}}>Por favor confira também</Text>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>sua caixa de Spam</Text>
     </View>
      

    </View>
  );
}


