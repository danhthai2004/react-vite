import "./todo.css";

const TodoAdd = (props) => {
  const { addNewTodo } = props;

  // addNewTodo("Thai"); // Gọi hàm addNewTodo khi component được render

  const handleAddClick = () => {
    alert("Button Clicked");
  }

  const handleOnChange = (name) => {
    console.log("Input changed: ", name);
  }
  return (
    <div className="todo-add">
      <input type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={addNewTodo}
      >Add</button>
    </div>
  )
}

export default TodoAdd