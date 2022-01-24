import { createContext, useState, useEffect } from "react";
import { TASKS } from "../models/task.data";
import * as store from "../services/store";

export const TasksContext = createContext({
  tasks: [],
  pendingTasks: 0,
  addTask: () => {},
  toggleCompleteTask: () => {},
  deleteTask: () => {},
});

// Componente "estandar" de react
export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState(TASKS);
  let pendingTasks = 0;
  useEffect(() => {
    store.getTasks().then((response) => {
      setTasks(response);
    });
  }, []);

  useEffect(() => {
    pendingTasks = tasks.filter((item) => !item.isCompleted).length;
  }, [tasks]);

  const addTask = (task) => {
    // Mock de generación de ids
    task.id = +tasks[tasks.length - 1].id + 1;
    const newTasks = [...tasks, task];
    store.setTasks(newTasks).then(() => {
      setTasks(newTasks);
    });
  };

  const toggleCompleteTask = ({ id }) => {
    const newTasks = tasks.map((item) => ({
      ...item,
      isCompleted: +item.id === +id ? !item.isCompleted : item.isCompleted,
    }));
    store.setTasks(newTasks).then(() => {
      setTasks(newTasks);
    });
  };

  const deleteTask = ({ id }) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    store.setTasks(newTasks).then(() => {
      setTasks(newTasks);
    });
  };

  const context = { tasks, addTask, toggleCompleteTask, deleteTask };
  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
}
