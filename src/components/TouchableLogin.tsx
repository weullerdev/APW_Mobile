import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function TouchableLogin(props: any) {
  const styles = StyleSheet.create({
    touchableLogin: {
      width: 225,
      height: 33,
      // marginTop: 10,
      // borderWidth: 1,
      // borderColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      color: "white",
    },
  });

  return (
    <>
      <LinearGradient
        colors={["rgba(0,45,99,1)", "rgba(9,0,173,1)", "rgba(0,131,186,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 5 }}
      >
        <TouchableOpacity style={styles.touchableLogin}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}
