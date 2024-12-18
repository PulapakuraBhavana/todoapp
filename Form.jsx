import React, { useState } from "react"; // Import useState from React
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim()) {
      // Check if the name is not empty
      setTodos([...todos, todo]); // Add the new todo object to the array
      setTodo({ name: "", done: false }); // Clear the input field and reset the state
    }
  };

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          placeholder="Add a todo"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
