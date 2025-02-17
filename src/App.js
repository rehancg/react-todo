import React, { useState, useCallback } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const addTodo = useCallback((text) => {
    setIdCounter(prev => prev + 1);
    setTodos(prev => [...prev, {
      id: idCounter,
      text,
      completed: false,
      priority: 'low'
    }]);
  }, [idCounter]);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const changePriority = useCallback((id, priority) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, priority } : todo
    ));
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onChangePriority={changePriority}
          />
        ))}
      </div>
    </div>
  );
}

export default App; 