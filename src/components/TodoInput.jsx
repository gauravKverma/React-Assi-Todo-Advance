import React from 'react'
import styles from "./todo.module.css"


const TodoInput = ({addTodo}) => {
    const [value, setValue]=React.useState("")
  return (
    <div>
        {/* <h1>Todo Advance</h1> */}
        <input  className={styles.input} type="text" placeholder='Write something' value={value} onChange={(e) => {
            setValue(e.target.value);
        }}/>
        <button  className={styles.addbutton} onClick={() => {
            // console.log(value)
            addTodo(value);
            setValue("");
        }}>+</button>
    </div>
  )
}

export default TodoInput