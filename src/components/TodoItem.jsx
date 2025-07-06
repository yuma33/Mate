import { Check } from 'lucide-react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 border transition-all ${
      todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
    }`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(todo.id)} //これは「無名関数を渡してる」。クリックされたら onToggle() を呼び出す。
          className={`mt-1 p-2 rounded-full transition-all ${
            todo.completed
              ? 'bg-green-500 text-white'
              : 'border-2 border-gray-300 text-transparent'
          }`}
        >
          <Check className="w-4 h-4" />
        </button>
        <div className="flex-1">
          <h3 className={`font-bold transition-colors ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
          }`}>
            {todo.content}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            予定日: {todo.scheduledDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;