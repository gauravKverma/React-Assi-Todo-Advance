import React from 'react'
import styles from "./todo.module.css"


const TodoList = ({children}) => {
  return (
    <div>
        <h1 style={{color:"grey"}}>TODO LIST</h1>
        {/* <hr /> */}
        <ul>{children}</ul>      
        {/* <hr /> */}
    </div>
    
  )
}

export default TodoList