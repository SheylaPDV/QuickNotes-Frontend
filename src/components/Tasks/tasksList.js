import React from "react";
import "../../App.css";

// Componente funcional TasksList que recibe la lista de tareas como prop.
function TasksList({ tasks }) {
  // Renderiza una lista de tareas.
  return (
    // Usa <ul> para la lista general, aunque los items individuales están envueltos en <div>s en lugar de <li>s.
    <ul>
      {/* Itera sobre el array de tareas y devuelve un elemento de lista para cada tarea. */}
      {tasks.map((task) => (
        <div className='task-container' key={task.id}>
          <div className='task-item'>
            <h4>{task.title}</h4>
            <p>{task.coment}</p>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default TasksList;
