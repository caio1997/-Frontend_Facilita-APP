import React, { useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function PublicarAnuncio({ route, navigation }) {
  const [nome, setNome] = useState(null);
  const [capacidade, setCapacidade] = useState(null);
  const [uso, setUso] = useState('NOVO');
  const [descricao, setDescricao] = useState(null);
  const [preco, setPreco] = useState(null);

  const item = route.params?.item
  const localizacao = route.params?.localizacao
  const idClient = route.params?.idClient

  const publicar = async () => {
    const params = {
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        capacidade: capacidade,
        descricao: descricao,
        preco: preco,
        uso: uso,
        produto: item,
        usuario: {
          id: idClient
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    console.log(params)
    const response = await fetch('https://backend-facilita-pos-fe11a1083fc9.herokuapp.com/api/anuncio/save', params)
    console.log(response)
    if (!response.ok) {
      Alert.alert("Aviso", "Sistema indisponível no momento - Seu anúncio não foi publicado")
    } else {
      return response.json()
    }
  };

  const anunciar = () => {
    if (nome, capacidade, uso, preco !== null) {
      if (uso == 'NOVO' || (uso == 'USADO')) {
        publicar().then(response => {
          console.log(response)
          navigation.reset({
            index: 0,
            routes: [{ name: "AnuncioPublicado", params: { idClient: idClient, localizacao: localizacao } }]
          })
        })
      } else {
        Alert.alert("Observação", "Valores aceito para o campo 'USO': NOVO ou USADO")
      }
    } else {
      Alert.alert("Aviso", "Favor preencher os campos obrigatórios")
    }
  };

  return (
    <View style={styles.principal}>

      <View style={{ height: '20%', alignItems: 'center' }}>
        <Image source={require('../assets/foto_anuncio.png')} style={{ width: 200, height: 200, resizeMode: 'contain', top: 20 }} />
      </View>

      <View style={{ height: '10%', alignItems: 'flex-start', left: 20, top: 100 }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 40, right: 0 }}>{item}</Text>
        <Image source={require('../assets/traco_verde.png')} />
      </View>

      <View style={{ height: '50%', alignItems: 'center', top: 120 }}>

        <Input
          placeholder="*Nome"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setNome(value)}
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Capacidade"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setCapacidade(value)}
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Uso (NOVO ou USADO)"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setUso(value)}
          returnKeyType="done"
          option
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="Descrição"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setDescricao(value)}
          returnKeyType="done"
          containerStyle={{ marginVertical: -5 }}
        />

        <Input
          placeholder="*Preço"
          style={{ fontWeight: 'bold', color: 'black' }}
          onChangeText={(value) => setPreco(value)}
          returnKeyType="done"
          keyboardType="phone-pad"
          containerStyle={{ marginVertical: -5 }}
        />
      </View>

      <View style={{ height: '20%', alignItems: 'center', top: 20 }}>
        <Button
          title="Anunciar"
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
          onPress={() => anunciar()}
        />
      </View>
    </View>
  );
}


