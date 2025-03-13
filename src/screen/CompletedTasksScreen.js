import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedTasksScreen = () => {
  const tasks = useSelector(state => state.tasks);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
          </View>
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
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default CompletedTasksScreen;
