export function TodoList({ todos }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    
                )
            })}
        </ul>
    )
}