import { View, ScrollView } from 'react-native';
import {useState, useEffect} from 'react'; 
import { Text, Image } from 'react-native-elements';
import styles from '../style/MainStyle';

export default function Principal({navigation}) {

const [dataSource, setDataSource] = useState([]);

useEffect(() => {  
  fetch('https://64cf923fffcda80aff520046.mockapi.io/api/anuncios')  
    .then((response) => response.json())  
    .then((responseJson) => {  
      setDataSource(responseJson);  
    })  
    .catch((error) => {  
      alert('Indisponibilidade no Sistema')
      console.error(error);  
    });
}, []);

 
  const ItemView = (item) => {  
    return (  
      <View style={{width: '95%', flexDirection: 'row', backgroundColor: '#e9e9e9', borderRadius: 10, left: 10, marginTop: 10}} >
        <View style={{width: '65%', flexDirection: 'row'}}>
        <View style={{width: '95%', left: 15}}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 8}} onPress={() => getItem(item)}>{item.nome}</Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10}} onPress={() => getItem(item)}>{item.preco}</Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 4}} onPress={() => getItem(item)}>{item.uso}</Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 4}} onPress={() => getItem(item)}>{item.capacidade}</Text>
        </View>
        </View>
        <View style={{height: '35%', flexDirection: 'column',}}>
        <View style={{width: '100%'}}>
        <Image source={require('../assets/foto.png')} style={{height: 110, width: 110}} onPress={() => getItem(item)}/>
          </View>
        </View>
        </View> 
    );  
  }; 

const getItem = (item) => {    
  navigation.navigate("Product",{
            nome: item.nome,
            capacidade: item.capacidade,
            uso: item.uso,
            descricao: item.descricao,
            preco: item.preco,
          });
};

const menu = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Menu"}]
    })
  };

  return (
    <View style={styles.principal}>
      <View style={{height: '10%'}}>
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
        <View style={{width: '15%', flexDirection: 'row', top: 20, left: 20}}>
          <Image source={require('../assets/menu_icon.png')} style={{width: 30, height: 30, resizeMode: 'contain'}} onPress={() => menu()}/>
        </View>
        <View style={{height: '85%', flexDirection: 'row', top: 20, left: 0}}>
          <Image source={require('../assets/filtro_icon.png')} style={{width: 340, height: 30, borderRadius: 30}}/>
        </View>
        </View>
      </View>
      <View style={{height: '10%'}}>
      <View style={{width: '100%', height: '100%', flexDirection: 'row', top: -10}}>
        <View style={{width: '30%', flexDirection: 'row', left: 20}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Localização:</Text>
        </View>
        <View style={{height: '70%', flexDirection: 'row', left: 20}}>
          <Text style={{color: 'black', fontSize: 20}}>Pará de Minas</Text>
        </View>
        </View>
      </View>
      <View style={{height: '80%', top: -50}}>
      <ScrollView>
      {
            dataSource.map(ItemView)
          }
      </ScrollView>
      </View>
     
    </View>
  );
}


