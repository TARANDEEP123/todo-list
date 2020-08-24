import React from 'react';
import logo from './logo.svg';
import uuid from'uuid'
import TodoInput from './component/Todo'
import TodoList from './component/TodoList'
import TodoItem from './component/TodoItem';


function App() {
  return (
    <div className="App">
      <TodoItem></TodoItem>
      <TodoList></TodoList>

    </div>
  );
}

export default App;
