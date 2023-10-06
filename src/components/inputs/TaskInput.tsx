import React from 'react'
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {}

const TaskInput = (props: Props) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} onChange={(e) => console.log(e.currentTarget.value)}  placeholder='Enter a task'/>
        <TouchableOpacity style={styles.submitButton} onPress={() => console.log("Submit")}>
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        flexDirection: 'row',
    },
    input:{
        borderWidth: 1,
        height: 40,
        flex: 1
    },
    submitButton:{
        borderWidth: 1,
        height: 40,
        width: 40
    }
    
})

export default TaskInput