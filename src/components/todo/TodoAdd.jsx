import { useState } from "react";
import "./todo.css";

const TodoAdd = (props) => {
  //useState hook để quản lý giá trị input
  const [valueInput, setValueInput] = useState("");

  const { addNewTodo } = props;

  // addNewTodo("Thai"); // Gọi hàm addNewTodo khi component được render

  const handleAddClick = () => {
    addNewTodo(valueInput);
  }

  const handleOnChange = (name) => {
    setValueInput(name);
  }
  return (
    <div className="todo-add">
      <input type="text"
        onChange={(event) => handleOnChange(event.target.value)}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={handleAddClick} //phần này video 37 bị sai
      >Add</button>
      <div>
        Text inpput:
      </div>
    </div>
  )
}

export default TodoAdd