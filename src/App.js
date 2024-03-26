import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTasks } from "./service";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(); // Llamar a getTasks sin paréntesis
        console.log(response);
        setTasks(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.coment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
