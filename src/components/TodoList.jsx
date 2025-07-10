import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        <p>TODOはまだありません。</p>
        <p>上のフォームからTODOを追加してみましょう！</p>
      </div>
    );
  }
//{todo.id}がないとどれが元のデータか分からない、どれが変更されたのか特定できない、そもそも削除されたのか変更されたのかがわからなくなってしまう。
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;