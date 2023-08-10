import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Inicial({ navigation }) {

  const acessar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
  };

  return (
    <View style={styles.principal}>
      <View style={{ height: '40%', alignItems: 'center' }}>
        <Image source={require('../assets/logo_facilita.png')} style={{ width: 250, height: 270, resizeMode: 'contain', top: 40 }} />
      </View>
      <View style={{ height: '30%', alignItems: 'center' }}>
        <Image source={require('../assets/nome_facilita.png')} style={{ width: 380, height: 200, resizeMode: 'contain' }} />
      </View>
      <View style={{ height: '30%', alignItems: 'center' }}>
        <Button title=">" type="clear"
          titleStyle={{ color: 'black', fontWeight: 'bold', fontSize: 90 }}
          onPress={() => acessar()}
        />
      </View>
    </View>
  );
}


