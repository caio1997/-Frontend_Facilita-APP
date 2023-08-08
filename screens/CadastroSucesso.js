import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function CadastroSucesso({navigation}) {

  const retornar = () => {
    Alert.alert("Observação", "O e-mail não será enviado!")
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  };

  return (

    <View style={styles.principal}>

      <View style={{height: '20%', alignItems: 'flex-start', left: 20}}>
      <Button title="<" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30}}
          style={{}}
          onPress={() => retornar()}
        />
        </View>

        <View style={{height: '25%', alignItems: 'center'}}>
              <Image source={require('../assets/logo_facilita.png')} style={{width: 250, height: 270, resizeMode: 'contain', top: -120}}/>

        </View>

        <View style={{height: '15%', alignItems: 'flex-start', left: 40}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40, right: 0}}>Sucesso</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>
        

        <View style={{height: '40%', alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 30}}>Cadastro realizado</Text>
          <Text style={{color: 'black', fontSize: 30}}>com sucesso</Text>
          <Text style={{color: 'black', fontSize: 20, top: 25}}>Lhe enviamos um e-mail com</Text>
          <Text style={{color: 'black', fontSize: 20, top: 26}}>a informação do cadastro</Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', top: 70}}>Por favor confira também</Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', top: 70}}>sua caixa de Spam</Text>
        </View>

    

    </View>

  );
}


