import React from 'react';
import { View, Image, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';
import { NumericFormat } from 'react-number-format';


export default function Product({ route, navigation }) {

  const visitarVendedor = () => {
    Alert.alert("Observação", "Implementação não realizada!")
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(value);


  const { nome, capacidade, uso, descricao, preco } = route.params;
  return (
    <View style={styles.principal}>

      <View
        style={{ height: '30%', alignItems: 'flex-end', top: 10 }}>
        <Image
          source={require('../assets/fotos_produto.PNG')}
          style={{ width: '100%', height: '70%', resizeMode: 'contain' }}
        />
      </View>

      <View
        style={{ height: '10%', alignItems: 'flex-start', left: 20, top: -20 }}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 40,
            right: 0,
          }}>
          {JSON.stringify(nome).replace(/\"/g, "")}
        </Text>
        <Image source={require('../assets/traco_verde.png')} style={{ top: 10 }} />
      </View>

      <View style={{ height: '40%', alignItems: 'center', top: 80 }}>
        <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
          <View style={{ width: '40%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Capacidade:</Text>
          </View>
          <View style={{ height: '60%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20 }}>{JSON.stringify(capacidade).replace(/\"/g, "")}</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
          <View style={{ width: '30%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Uso:</Text>
          </View>
          <View style={{ height: '70%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20 }}>{JSON.stringify(uso).replace(/\"/g, "")}</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
          <View style={{ width: '30%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Descrição:</Text>
          </View>
          <View style={{ height: '70%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20 }}>{descricao ? JSON.stringify(descricao).replace(/\"/g, "") : ''}</Text>
          </View>
        </View>
        <View style={{ width: '100%', height: '20%', flexDirection: 'row' }}>
          <View style={{ width: '30%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Preço:</Text>
          </View>
          <View style={{ height: '70%', flexDirection: 'row', top: -40, left: 30 }}>
            <Text style={{ fontSize: 20 }}>{numberFormat(JSON.stringify(preco).replace(/\"/g, ""))}</Text>
          </View>
        </View>
      </View>

      <View style={{ height: '20%', alignItems: 'center', top: 30 }}>
        <Button
          title="Visitar Vendedor"
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
            marginVertical: 10,
          }}
          onPress={() => visitarVendedor()}
        />
      </View>
    </View>
  );
}
