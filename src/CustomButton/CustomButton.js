import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'


const CustomButton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#DC2D2D',
        width: '70%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
     color:'white',
     fontWeight: 'bold'
    },
});

export default CustomButton