import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TaskInput from '../components/inputs/TaskInput';
import TaskCard from '../components/cards/TaskCard';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <TaskInput />
      </View>
      <View style={styles.taskSection}>
        <TaskCard/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1,
  },
  inputSection: {
    borderWidth: 2,
    borderColor: 'black',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  taskSection: {
    borderWidth: 2,
    borderColor: 'black',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
