import { StyleSheet, TextInput } from "react-native";

export default function InputLogin (props: any) {
  const styles = StyleSheet.create({
    inputLogin: {
      fontSize: 18,
      color: 'white',
      width: 225,
      borderBottomWidth: 1,
      borderColor: 'white',
      // marginTop: 10,
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