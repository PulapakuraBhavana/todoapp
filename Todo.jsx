import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]); // Initialize as an empty array
  const completedTodos = todos.filter((todo) => todo.done).lenght;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <h1>{completedTodos}</h1>
    </div>
  );
}
