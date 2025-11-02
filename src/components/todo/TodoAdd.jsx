import "./todo.css";

const TodoAdd = (props) => {
  const { addNewTodo } = props;

  // addNewTodo("Thai"); // Gọi hàm addNewTodo khi component được render

  return (
    <div className="todo-add">
      <input type="text" />
      <button>Add</button>
    </div>
  )
}

export default TodoAdd