import "./App.css";
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
    <div className='task-list'>
      <h1 className='block-effect' style={{ "--td": "1.2s" }}>
        <div
          className='block-reveal'
          style={{ "--bc": "#4040bf", "--d": ".1s" }}>
          Quick
        </div>
        <div
          className='block-reveal'
          style={{ "--bc": "#bf4060", "--d": ".5s" }}>
          Notes
        </div>
      </h1>

      <ul>
        {tasks.map((task) => (
          <div className='task-container'>
            <div key={task.id} className='task-item'>
              <h4>{task.title}</h4>
              <p>{task.coment}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
