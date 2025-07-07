import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Event from  "./components/Event";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const addTodo = (newTodoData) => {
    const newTodo = {
      id: Date.now(),
      content: newTodoData.content,
      scheduledDate: newTodoData.scheduledDate,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  const cancelEditing = () => {
    setEditingTodo(null);
  };

  const updateTodo = (updatedTodoData) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodoData.id
          ? {
              ...todo,
              ...updatedTodoData,
              updatedAt: new Date().toISOString()
            }
          : todo
      )
    );
    setEditingTodo(null);
  };

  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);
  };

  const filteredTodos = todos.filter(todo => {
    if (activeFilter === 'incomplete') {
      return !todo.completed;
    }
    if (activeFilter === 'complete') {
      return todo.completed;
    }
    return true;
  });

  const TodoPage = () => (
    <main className="container mx-auto p-4 md:p-8">
      <Event
        onTodoAdd={editingTodo ? updateTodo : addTodo}
        editingTodo={editingTodo}
        onCancel={cancelEditing}
      />
      <FilterButtons
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={startEditing}
      />
    </main>
  );

  return (
    <BrowserRouter>
      <div className="bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<TodoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;