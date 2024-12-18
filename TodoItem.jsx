import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  // Handle delete action
  function handleDelete() {
    console.log("Delete button clicked in the item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  // Handle click to toggle completion
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    console.log("Updated todos:", newArray);
  }

  // Determine className based on 'done' status
  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={handleDelete} className={styles.deleteButton}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
