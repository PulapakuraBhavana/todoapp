import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  // Default to an empty array
  if (!Array.isArray(todos)) {
    console.error("todos must be an array. Received:", todos);
    return null; // Safeguard against invalid prop type
  }

  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
