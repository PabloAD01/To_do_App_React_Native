import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TaskInput from '../components/inputs/TaskInput';
import TaskCard from '../components/cards/TaskCard';

type Props = {};

interface ITask {
  id: number;
  name: string;
}

const tasks: ITask[] = [
  {
    id: 1,
    name: 'Task 1',
  },
  {
    id: 2,
    name: 'Task 2',
  },
  {
    id: 3,
    name: 'Task 3',
  },
  {
    id: 4,
    name: 'Task 4',
  },
  {
    id: 5,
    name: 'Task 1',
  },
  {
    id: 6,
    name: 'Task 2',
  },
  {
    id: 7,
    name: 'Task 3',
  },
  {
    id: 8,
    name: 'Task 4',
  },
  {
    id: 9,
    name: 'Task 1',
  },
  {
    id: 10,
    name: 'Task 2',
  },
  {
    id: 11,
    name: 'Task 3',
  },
  {
    id: 12,
    name: 'Task 4',
  },
];

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TaskInput />
      </View>
      <View style={styles.taskSection}>
        <FlatList
        style={{width: '100%', height: '100%', overflow: 'visible'}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        ItemSeparatorComponent={() => <View style={{ height: 10}} />}
          data={tasks}
          
          renderItem={(item) => <TaskCard />}
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
