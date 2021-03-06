import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext";

import "./ToDoForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewToDoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (e) => {
    setNewToDoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
