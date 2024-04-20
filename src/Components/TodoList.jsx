import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
    { id: 3, text: "Todo 3" },
  ]);

  const handleDragStart = (e, id) => {
    
    e.dataTransfer.setData("id", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, droppedId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('id');
    // const draggedTodo = todos.find((todo)=>todo.id.toString() == draggedId);
    const droppedIndex = todos.findIndex((todo)=>todo.id.toString() == droppedId);
    const newTodos = [...todos];
    const draggedIndex = newTodos.findIndex((todo)=>todo.id.toString() == draggedId);
    const draggedTodo = newTodos.splice(draggedIndex, 1)[0];
    newTodos.splice(droppedIndex, 0, draggedTodo)
    // if(draggedId < droppedId){
        // newTodos.splice(draggedIndex, 1)
        // console.log(newTodos.splice(draggedIndex, 1)[0]);
    // } else {
    //     newTodos.splice(draggedIndex + 1, 1)
    // }
    setTodos(newTodos);
  }

  return (
    <div>
      {todos ? (
        todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              text={todo.text}
              id={todo.id.toString()}
              index={i}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
          );
        })
      ) : (
        <h1>Add a Todo</h1>
      )}
    </div>
  );
};

export default TodoList;
