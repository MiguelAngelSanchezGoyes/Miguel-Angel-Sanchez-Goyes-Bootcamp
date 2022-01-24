import { createContext, useReducer, useEffect, useRef } from "react";
import { TASKS } from "../models/task.data";
import { tasksReducer } from "../components/tasks/reducers/taskreducer";
import * as actions from "../components/tasks/reducers/actioncreators";
import * as store from "../services/store";

export const ReduxContext = createContext({
  tasks: [],
  pending: undefined,
  pendingTasks: () => {},
  addTask: () => {},
  toggleCompleteTask: () => {},
  deleteTask: () => {},
});

// Componente "estandar" de react
export function ReduxContextProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, TASKS);
  // const pendingTasks = useRef(0);
  useEffect(() => {
    store.getTasks().then((response) => {
      // setTasks(response);
      dispatch(actions.loadTasks(response));
    });
  }, []);

  const pendingTasks = () => tasks.filter((item) => !item.isCompleted).length;

  const pending = useRef(tasks.filter((item) => !item.isCompleted).length);

  useEffect(() => {
    pending.current = tasks.filter((item) => !item.isCompleted).length;
    console.log("Calculando pending:", pending);
  }, [tasks]);

  const addTask = (task) => {
    // Mock de generación de ids
    task.id = +tasks[tasks.length - 1].id + 1;
    const newTasks = [...tasks, task];
    store.setTasks(newTasks).then(() => {
      // TODO
      // setTasks(newTasks);
      dispatch(actions.addTask(task));
    });
  };

  const toggleCompleteTask = ({ id }) => {
    const newTasks = tasks.map((item) => ({
      ...item,
      isCompleted: +item.id === +id ? !item.isCompleted : item.isCompleted,
    }));
    store.setTasks(newTasks).then(() => {
      // TODO
      // setTasks(newTasks);
      dispatch(actions.toggleTask(id));
    });
  };

  const deleteTask = ({ id }) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    store.setTasks(newTasks).then(() => {
      // TODO
      // setTasks(newTasks);
      dispatch(actions.deleteTasks(id));
    });
  };

  const context = {
    tasks,
    pendingTasks,
    pending: pending.current,
    addTask,
    toggleCompleteTask,
    deleteTask,
  };
  return (
    <ReduxContext.Provider value={context}>{children}</ReduxContext.Provider>
  );
}
