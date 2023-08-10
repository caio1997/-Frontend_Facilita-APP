import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Informacoes() {


  return (
    <View style={styles.principal}>


      <View style={{ height: '30%', alignItems: 'center' }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 250, height: 270, resizeMode: 'contain' }} />

      </View>

      <View style={{ height: '20%', alignItems: 'flex-start', left: 40, top: 70 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 40, right: 0 }}>Sobre</Text>
        <Image source={require('../assets/traco_verde.png')} />
      </View>


      <View style={{ height: '40%', alignItems: 'center', top: 25 }}>
        <Text style={{ color: 'black', fontSize: 25 }}>O aplicativo facilita foi</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>desenvolvido com o</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>objetivo de ajudar as</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>pessoas a se</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>desapegarem e</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>apegaram, com foco</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>em produtos</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>eletrônicos da sua</Text>
        <Text style={{ color: 'black', fontSize: 25 }}>região</Text>
      </View>

      <View style={{ height: '10%', alignItems: 'flex-end', right: 30 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Since 2023</Text>
      </View>

    </View>
  );
}


