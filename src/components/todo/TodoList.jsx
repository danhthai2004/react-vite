import "./todo.css";

const TodoList = (props) => { //props là 1 object chứa các thuộc tính được truyền từ component cha
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    const { name, age, data } = props; //destructuring assignment

    return (
        <div className="todo-list">
            <div>Learning React</div>
            <div>Learning Spring</div>
            {/* <div>Name: {props.name}</div> */}
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Address: {data.address}</div>
            <div>Country: {data.country}</div>
        </div>
    )
}

export default TodoList