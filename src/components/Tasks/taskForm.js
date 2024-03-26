import React, { useState } from "react";
import "../../App.css";
import "./tasksForm.css";

// Componente funcional TaskForm para el formulario de añadir nuevas tareas
function TaskForm({
  newTitle, // Estado del título de la nueva tarea
  setNewTitle, // Función para actualizar el estado del título
  newComment, // Estado del comentario de la nueva tarea
  setNewComment, // Función para actualizar el estado del comentario
  handleAddTask: originalHandleAddTask,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  // Envoltura de la función handleAddTask para incluir validación
  const handleAddTask = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Verifica si el título o el comentario están vacíos
    if (!newTitle.trim() || !newComment.trim()) {
      setErrorMessage("Tanto el título como el comentario son obligatorios."); // Establece el mensaje de error
      return; // Detiene la función si alguna validación falla
    } else {
      setErrorMessage(""); // Limpia el mensaje de error si la validación pasa
    }

    // Si pasa la validación, llama a la función original handleAddTask
    originalHandleAddTask(e);
  };
  // Renderiza el formulario
  return (
    // Define el evento onSubmit para manejar el envío del formulario
    <form onSubmit={handleAddTask}>
      <input
        type='text'
        placeholder='Título de la nota'
        value={newTitle} // Vincula el valor del campo al estado del título
        onChange={(e) => setNewTitle(e.target.value)} // Actualiza el estado del título cuando cambia el campo
        required
      />
      {/* Campo de entrada para el comentario de la nueva tarea */}
      <input
        type='text'
        placeholder='Comentario'
        value={newComment} // Vincula el valor del campo al estado del comentario
        onChange={(e) => setNewComment(e.target.value)} // Actualiza el estado del comentario cuando cambia el campo
        required
      />
      {errorMessage && (
        <div style={{ color: "#bf4060" }} className='error-message'>
          {errorMessage}
        </div>
      )}

      {/* Botón para enviar el formulario */}
      <div
        className='button_slide slide_right'
        onClick={handleAddTask} // Manejador de clic para simular el envío del formulario
        role='button' // Mejora la accesibilidad indicando el rol del elemento
        tabIndex='0' // Permite que el div sea enfocable con el teclado
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") handleAddTask(e);
        }} // Permite que el div responda a teclas específicas como un botón
      >
        Añadir nota
      </div>

      {/* <button type='submit'>Añadir Nota</button> */}
    </form>
  );
}
// Exporta el componente TaskForm para su uso en otros lugares de la aplicación
export default TaskForm;
