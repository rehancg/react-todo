import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = (text) => {
    setIdCounter(idCounter + 1);
    const newTodo = {
      id: idCounter,
      text: text,
      completed: false,
      priority: 'low'
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changePriority = (id, priority) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, priority: priority } : todo
      )
    );
  };

  const renderTodos = () => {
    return todos.map(todo => (
      <div key={todo.id} className={`${todo.completed ? 'completed' : ''} ${todo.priority === 'high' ? 'red-bg' : 'white-bg'}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <select
          value={todo.priority}
          onChange={(e) => changePriority(todo.id, e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <div id="todoList">
        {renderTodos()}
      </div>
    </div>
  );
}

export default App; 