import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Check from 'react-native-vector-icons/FontAwesome5';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleComplete(task.id)} style={styles.checkbox}>
        {
          task.completed ? 
        <Check name="check-circle" size={30} color="green"/>
        :
        <Icon name="circle" size={30} color="#900"/>
        }

      </TouchableOpacity>
      <Text style={[styles.taskText, task.completed && styles.completedText]}>{task.text}</Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
        <Check name="trash" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkbox: {
    marginRight: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    padding: 5,
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
});

export default TaskItem;
