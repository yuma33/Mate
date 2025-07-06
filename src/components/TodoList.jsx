import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => {
  //この早期リターン
  if (todos.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
        <p>TODOはまだありません。</p>
        <p>上のフォームから最初のTODOを追加してみましょう！</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
