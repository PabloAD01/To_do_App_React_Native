import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

type Props = {}

const TaskCard = (props: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.taskText} > Enter a task</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => console.log("Submit")}>
            <Text>R</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        flexDirection: 'row',
    },
    taskText:{
        borderWidth: 1,
        height: 40,
        flex: 1,
        fontSize: 18,
        
    },
    deleteButton:{
        borderWidth: 1,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})

export default TaskCard