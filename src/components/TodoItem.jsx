import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-2 border border-gray-200">
      <h3 className="font-bold text-gray-800">{todo.content}</h3>
      <p className="text-sm text-gray-500 mt-2">予定日: {todo.scheduledDate}</p>
    </div>
  );
};

export default TodoItem;
