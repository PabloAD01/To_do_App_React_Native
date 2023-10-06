import React, { useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TaskInput from '../components/inputs/TaskInput';
import TaskCard from '../components/cards/TaskCard';

type Props = {};

export interface ITask {
  id: number;
  name: string;
}


const HomeScreen = (props: Props) => {

  const [tasks, setTasks] = useState<ITask[]>([]);

  

  const addTask = (name: string) => {
    setTasks([...tasks, {id: tasks.length + 1, name: name}]);
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TaskInput addTask={addTask} />
      </View>
      <View style={styles.taskSection}>
        <FlatList
        style={{width: '100%', height: '100%', overflow: 'visible'}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ height: 10}} />}
          data={tasks}
          
          renderItem={(data) => <TaskCard data={data.item} deleteTask={deleteTask} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputSection: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  taskSection: {

    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default HomeScreen;
