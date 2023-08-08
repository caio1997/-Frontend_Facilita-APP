import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Menu({navigation}) {

  const anuncios = () => {
    navigation.navigate("Principal")
  };

  const notImplementation = () => {
    Alert.alert("Observação","Implementação não realizada!")
  };

  const sair = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Sair"}]
    })
  };

  const menu = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Principal"}]
    })
  };

  const informacao = () => {
    navigation.navigate("Informacoes")
  };

  return (
    <View style={styles.principal}>


    <View style={{height: '20%', alignItems: 'flex-end', right: 20}}>
      <Button title=">" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30}}
          style={{}}
          onPress={() => menu()}
        />
    </View>

    <View style={{height: '20%', alignItems: 'center'}}>
              <Image source={require('../assets/logo_facilita.png')} style={{width: 250, height: 270, resizeMode: 'contain', top: -120}}/>
    </View>

        <View style={{height: '15%', alignItems: 'flex-start', left: 40}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40, right: 0}}>Menu</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>

    <View style={{height: '40%', alignItems: 'center'}}>
    <Button
              title="Anúncios"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 40,
                width: 200
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
              containerStyle={{
                height: 40,
                width: 200,
              }}
              onPress={() => anuncios()}
            />

            <Button
              title="Perfil"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 40,
                width: 200,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
              containerStyle={{
                height: 40,
                width: 200,
                top: 10
              }}
              onPress={() => notImplementation()}
            />

            <Button
              title="Publicar"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 40,
                width: 200,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
              containerStyle={{
                height: 40,
                width: 200,
                top: 20
              }}
              onPress={() => notImplementation()}
            />

            <Button
              title="Meus anúncios"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 40,
                width: 200,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}
              containerStyle={{
                marginHorizontal: 0,
                height: 40,
                width: 200,
                top: 30
              }}
              onPress={() => notImplementation()}
            />

            <Button
              title="Sair"
              type="outline"
              buttonStyle={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: 5,
                borderColor: 'black',
                height: 40,
                width: 180,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}
              containerStyle={{
                height: 40,
                width: 180,
                top: 50
              }}
              onPress={() => sair()}
            />   
      </View>

      <View style={{height: '20%', alignItems: 'flex-end', top: -30, right: 30}}>
      <Button
              title="Informações"
              type="outline"
              buttonStyle={{
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: 5,
                borderColor: 'black',
                height: 30,
                width: 100
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 10, color: 'black' }}
              containerStyle={{
                height:30,
                width: 100
              }}
              onPress={() => informacao()}
            />   
      </View>





            

    </View>
  );
}


