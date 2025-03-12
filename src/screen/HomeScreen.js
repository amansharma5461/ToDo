import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadTasks, addTask, toggleComplete, deleteTask } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now().toString(), text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new task"
        value={taskText}
        onChangeText={setTaskText}
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            toggleComplete={() => dispatch(toggleComplete(item.id))}
            deleteTask={() => dispatch(deleteTask(item.id))}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#007BFF',
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
