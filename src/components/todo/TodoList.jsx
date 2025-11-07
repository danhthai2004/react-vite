import "./todo.css";

const TodoList = (props) => {
    const { Todos } = props; //destructuring assignment

    return (
        <div className="todo-list">
            {Todos.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(Todos)}
            </div>
        </div>
    )
}

export default TodoList