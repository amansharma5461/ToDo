import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  LOAD_TASKS } from './taskActions';

export const loadTasks = createAsyncThunk(LOAD_TASKS, async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('TASKS');
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading tasks:', error);
    return [];
  }
});

const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newState = [...state, action.payload];
      saveTasksToStorage(newState);
      return newState;
    },
    toggleComplete: (state, action) => {
      const newState = state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveTasksToStorage(newState);
      return newState;
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveTasksToStorage(newState);
      return newState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadTasks.fulfilled, (state, action) => action.payload);
  }
});

export const { addTask, toggleComplete, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
