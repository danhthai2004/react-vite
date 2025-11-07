import { useState } from "react";
import "./todo.css";

const TodoAdd = (props) => {
  //useState hook để quản lý giá trị input
  const [valueInput, setValueInput] = useState("");

  const { addNewTodo } = props;

  // addNewTodo("Thai"); // Gọi hàm addNewTodo khi component được render

  const handleAddClick = () => {
    addNewTodo(valueInput);
    setValueInput(""); //reset lại giá trị input là rỗng sau khi thêm
  }

  const handleOnChange = (name) => {
    setValueInput(name);
  }
  return (
    <div className="todo-add">
      <input type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput} //kiểm soát giá trị của input được lấy từ state
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={handleAddClick}
      >Add</button>
      <div>
        Text input:
      </div>
    </div>
  )
}

export default TodoAdd