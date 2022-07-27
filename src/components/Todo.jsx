// import App from "../App"
// import {useEffect} from 'react'

function Todo({ todoList, setTodoList, todoString, setTodoString }) {

  const addTodo = () => {
    setTodoList([...todoList, todoString])
    setTodoString("")
    document.title = "About"
  }

  // useEffect(()=>{
  //   console.log("Initialized and Mounted")
  // }, [todoString])

  const handleText = (e) => {
    setTodoString(e.target.value);
  }

  return (
    <>
      {/* <input name="todo" type="text" id="todo"></input> */}
      <input name="todo" type="text" value={todoString} onChange={handleText} ></input>
      <button onClick={addTodo}>ADD</button>
    </>
  );
}

export default Todo;