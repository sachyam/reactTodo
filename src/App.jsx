// import {useState} from 'react'
import Todo from './components/Todo';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useState } from 'react'
//component function is catipalized
//returns jsx
function App(props) {
  const [todoList, setTodoList] = useState([])
  const [todoString, setTodoString] = useState("");


  return (
    <>
      <Counter /><br />
      <Todo
        title="Todo for Today"
        todoList={todoList}
        setTodoList={setTodoList}
        todoString={todoString}
        setTodoString={setTodoString} />
      <TodoList todoList={todoList} />
    </>
  )
}
export default App;
