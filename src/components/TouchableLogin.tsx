import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TouchableLogin (props: any) {
  const styles = StyleSheet.create({
    touchableLogin: {
      width: 250,
      height: 33,
      marginTop: 10,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.6)",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    text: {
      fontSize: 18,
      color: "rgba(0, 0, 0, 0.4)",
    }
  });

  return (
    <>
      <TouchableOpacity style={styles.touchableLogin}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </>
  )
}