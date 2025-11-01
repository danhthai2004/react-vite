import './components/todo/todo.css';
import TodoAdd from './components/todo/TodoAdd.jsx';
import TodoList from './components/todo/TodoList.jsx';
import reactLogo from './assets/react.svg';
// arrow function syntax
const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoAdd />
      <TodoList />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )
}

export default App
