import TaskCard from "./TaskCard";
//import { tasks } from "../data/tasks";

function TaskLists({task, deleteTask}) {                                               
  //console.log(task.length)
  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

     return (
       <div>
        {task.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
         ))}
    </div>
    );
}
export default TaskLists;
