import { Check, Trash2, Edit } from 'lucide-react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Tokyo'
    });
  };
  return (
    <div className={`bg-white rounded-lg shadow p-4 border transition-all ${
      todo.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
    }`}>
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(todo.id)}
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
          {/* 作成日時と更新日時を表示 - formatDateTimeを適用 */}
          <div className="mt-4 text-xs text-gray-500 space-y-1">
            <div>作成日時: {formatDateTime(todo.createdAt)}</div>
            <div>更新日時: {formatDateTime(todo.updatedAt)}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(todo)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
            title="編集"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            title="削除"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
