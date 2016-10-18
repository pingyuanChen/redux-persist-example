import React, { PropTypes } from 'react';

const TodoItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      lineHeight: '26px',
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
