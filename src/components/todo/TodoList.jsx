import "./todo.css";

const TodoList = (props) => {
    const { Todos, deleteTodo } = props; //destructuring assignment

    const handleDeleteClick = (id) => {
        // Gọi hàm deleteTodo từ props
        if (deleteTodo) {
            deleteTodo(id);
        }
    }
    return (
        <div className="todo-list">
            {Todos.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDeleteClick(item.id)}
                        >Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList