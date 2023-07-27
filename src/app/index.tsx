import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';

import InputLogin from '@Components/InputLogin'
import TouchableLogin from '@Components/TouchableLogin';
import IMAGE_LOGIN from '@Assets/images/login.jpg'

export default function App() {
  return (
      <ImageBackground 
        source={IMAGE_LOGIN} 
        style={styles.image} 
        blurRadius={5}
      >
        <View style={styles.container}>
          <StatusBar style="auto" />
          <InputLogin placeholder="Usuário" />
          <InputLogin placeholder="Senha" />
          <TouchableLogin />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 375,
    width: 275,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 60,
    backgroundColor: 'rgba(133, 133, 123, 0.6)',
    borderWidth: 1,
    borderColor: '#ffffff',
    gap: 10,
  }
});