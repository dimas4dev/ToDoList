import React, { useEffect, useState } from "react";
import { TodoProvider } from "../TodoContext";

import { useLocalStorage } from "../hooks/useLocalStorage";

import "./App.css";

import { AppUI } from "./AppUI";
const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorono", completed: true },
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export { App };
