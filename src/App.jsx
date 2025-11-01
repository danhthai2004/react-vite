import './components/todo/todo.css';
import TodoAdd from './components/todo/TodoAdd.jsx';
import TodoList from './components/todo/TodoList.jsx';
import reactLogo from './assets/react.svg';
// arrow function syntax
const App = () => {

  const ten = "Thai";
  const tuoi = 22;
  const data = {
    address: "Da Nang",
    country: "Viet Nam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoAdd />
      <TodoList
        name={ten}
        age={tuoi}
        data={data}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
