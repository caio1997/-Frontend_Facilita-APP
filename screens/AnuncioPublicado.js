import { View, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function AnuncioPublicado({ route, navigation }) {

  const localizacao = route.params?.localizacao
  const idClient = route.params?.idClient

  const retornar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Anunciar", params: { idClient: idClient, localizacao: localizacao } }]
    })
  };


  return (
    <View style={styles.principal}>

      <View style={{ height: '10%', alignItems: 'flex-start', left: 20 }}>
        <Button title="<" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}
          style={{}}
          onPress={() => retornar()}
        />
      </View>

      <View style={{ height: '30%', alignItems: 'center' }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 210, height: 210, resizeMode: 'contain', top: 0 }} />
      </View>

      <View style={{ height: '20%', alignItems: 'flex-start', left: 20, top: 20 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 35 }}>Sucesso</Text>
        <Image source={require('../assets/traco_verde.png')} />
      </View>


      <View style={{ height: '15%', alignItems: 'center' }}>
        <Text style={{ fontSize: 35 }}>Anuncio criado</Text>
        <Text style={{ fontSize: 35 }}>com sucesso</Text>
      </View>

      <View style={{ height: '20%', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>O anúncio será</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>analisado e publicado</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>nas próximas horas</Text>
      </View>


    </View>
  );
}


