import TaskList from "./components/TaskLists";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import {tasks as data} from './data/tasks'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  }

  return (
      <>
        <TaskForm createTask={createTask}/>
        <TaskList task={tasks} deleteTask={deleteTask}/>
      </>
  );
}

export default App;
