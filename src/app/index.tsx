import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

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
    marginBottom: 60,
  }
});