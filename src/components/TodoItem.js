import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, onToggle, onDelete, onChangePriority }) {
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <select
        value={todo.priority}
        onChange={(e) => onChangePriority(todo.id, e.target.value)}
        className="priority-select"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangePriority: PropTypes.func.isRequired
};

export default TodoItem; 