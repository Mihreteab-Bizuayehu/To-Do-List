import React, { useState } from 'react'
import "./Todo.css"

function Todo() {
  const [todos,setTodos]=useState([])
  const [input,setInput]=useState("")

  const handleSubmit=()=>{
    setTodos((todos)=>
      todos.concat({
        text:input,
        id:Math.floor(Math.random()*100),
      })
      )
      setInput("")
  }
  const removeTodo=(itemId)=>setTodos((todos)=>todos.filter((item)=>item.id!==itemId))

  return (
    <div>
      <div className="container">
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='New To Do'/>
      <button onClick={handleSubmit}>Submit</button>
      </div>
      <ul className="todos-list">{
        todos.map(({text,id})=>
               <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={()=>removeTodo(id)}>X</button>
               </li>
      )
      }</ul>
    </div>
  )
}

export default Todo
