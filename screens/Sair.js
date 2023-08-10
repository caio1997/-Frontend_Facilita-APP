import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function CadastroSucesso({ navigation }) {

  const retornar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
  };

  return (
    <View style={styles.principal}>

      <View style={{ height: '20%', alignItems: 'flex-start', left: 20 }}>
        <Button title="<" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}
          style={{}}
          onPress={() => retornar()}
        />
      </View>

      <View style={{ height: '30%', alignItems: 'center' }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 250, height: 270, resizeMode: 'contain', top: -120 }} />

      </View>

      <View style={{ height: '15%', alignItems: 'flex-start', left: 40 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 40, right: 0 }}>Sair</Text>
        <Image source={require('../assets/traco_verde.png')} />
      </View>


      <View style={{ height: '40%', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 30 }}>Seu acesso foi finalizado</Text>
        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', top: 50 }}>Volte sempre</Text>
      </View>

    </View>
  );
}


