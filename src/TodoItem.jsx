export function TodoItem() {
    return (
        <li key={todo.id}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                // onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
            </label>
            <button
                // onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger">Delete
            </button>
        </li>
    )
}