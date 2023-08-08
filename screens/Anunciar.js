import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Anunciar({navigation}) {


  const notImplementation = () => {
    Alert.alert("Observação","Implementação não realizada!")
  };

  const menu = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Menu"}]
    })
  };

  return (
    <View style={styles.principal}>
    <View style={{height: '10%', alignItems: 'flex-start', left: 20}}>
      <Button title="<" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30}}
          style={{}}
          onPress={() => menu()}
        />
        </View>

    <View style={{height: '20%', alignItems: 'center'}}>
              <Image source={require('../assets/logo_facilita.png')} style={{width: 250, height: 270, resizeMode: 'contain', top: -40}}/>
    </View>

        <View style={{height: '20%', alignItems: 'flex-start', left: 40, top: 90}}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 40}}>Anunciar</Text>
        <Image source={require('../assets/traco_verde.png')}/>
        </View>

    <View style={{height: '50%', alignItems: 'center', top: 70}}>
    <Button
              title="Celular"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 50,
                width: 250
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}
              containerStyle={{
                height: 50,
                width: 250,
              }}
              onPress={() => navigation.navigate("PublicarAnuncio", {item: "Celular"})}
            />

            <Button
              title="Notebook"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 50,
                width: 250,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}
              containerStyle={{
                height: 50,
                width: 250,
                top: 10
              }}
              onPress={() => navigation.navigate("PublicarAnuncio", {item: "Notebook"})}
            />

            <Button
              title="Monitor/TV"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 50,
                width: 250,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}
              containerStyle={{
                height: 50,
                width: 250,
                top: 20
              }}
              onPress={() => notImplementation()}
            />

            <Button
              title="Geral"
              buttonStyle={{
                backgroundColor: 'rgba(183, 223, 190, 1)',
                borderRadius: 5,
                height: 50,
                width: 250,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 25, color: 'black' }}
              containerStyle={{
                marginHorizontal: 0,
                height: 50,
                width: 250,
                top: 30
              }}
              onPress={() => notImplementation()}
            />
      </View>
    </View>
  );
}


