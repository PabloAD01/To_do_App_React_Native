import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { ITask } from '../../screens/HomeScreen';

type Props = {
    data: ITask
    deleteTask: (id: number) => void;
}

const TaskCard = ({data, deleteTask}: Props) => {

    const handleClick = () => {
        deleteTask(data.id);
    }

  return (
    <View style={styles.container}>
        <Text style={styles.taskText} >{data.name}</Text>
        <TouchableOpacity style={styles.deleteButton} onPress={handleClick}>
            <Text style={styles.buttonText}>R</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
    },
    taskText:{
        height: 40,
        flex: 1,
        fontSize: 18,
        textAlignVertical: 'center',
        
    },
    deleteButton:{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7c70',
        borderRadius: 8
    },
    buttonText:{
        fontWeight: 'bold',
        color: 'white'
        
    }
    
})

export default TaskCard