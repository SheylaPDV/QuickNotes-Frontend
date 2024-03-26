import "./App.css";
import React, { useEffect, useState } from "react";
import { getTasks, postTasks } from "./service";
import TaskForm from "./components/Tasks/taskForm";
import TasksList from "./components/Tasks/tasksList";

// Componente principal App
function App() {
  // Estados para manejar la lista de tareas, título y comentario de una nueva tarea
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");

  // useEffect para cargar tareas al iniciar el componente
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Intenta obtener las tareas desde un servicio externo
        const response = await getTasks();

        // Si es exitoso, actualiza el estado de tareas
        setTasks(response);
      } catch (error) {
        // Captura y registra cualquier error
        console.error(error);
      }
    };

    // Llama a fetchTasks
    fetchTasks();
  }, []); // El array vacío indica que este efecto solo se ejecuta una vez al montar el componente

  // Función para manejar el envío del formulario de nueva tarea
  async function handleAddTask(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recarga de página)

    const newTask = { title: newTitle, coment: newComment }; // Crea un objeto con el nuevo título y comentario

    try {
      // Intenta enviar la nueva tarea al servidor
      await postTasks(newTask);

      // Si es exitoso, recarga las tareas para incluir la nueva
      const updatedTasks = await getTasks();
      setTasks(updatedTasks); // Actualiza el estado de tareas
      setNewTitle(""); // Limpia el campo del título
      setNewComment(""); // Limpia el campo del comentario
    } catch (error) {
      console.error(error);
    }
  }

  // Renderiza el componente
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
      <TaskForm
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddTask={handleAddTask}
      />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
