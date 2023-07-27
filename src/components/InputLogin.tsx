import { StyleSheet, TextInput } from "react-native";

export default function InputLogin (props: any) {
  const styles = StyleSheet.create({
    inputLogin: {
      fontSize: 18,
      color: 'white',
      width: 250,
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.6)',
      marginTop: 10,
    },
  });

  return (
    <>
      <TextInput 
        style={styles.inputLogin} 
        placeholder={props.placeholder} 
        placeholderTextColor={'rgba(0, 0, 0, 0.4)'}
      />
    </>
  )
}