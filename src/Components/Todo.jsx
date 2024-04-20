/* eslint-disable react/prop-types */

const Todo = ({text, handleDragStart, id, handleDragOver, handleDrop}) => {
  return (
    <div
    className="todoItem"
    draggable="true"
    onDragStart={(e)=>handleDragStart(e, id)}
    onDragOver={(e)=>handleDragOver(e)}
    onDrop={(e)=>handleDrop(e, id)}
    >
      <h2>{text}</h2>
    </div>
  )
}

export default Todo
