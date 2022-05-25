import React from 'react'
import styles from './todo.module.css'

const TodoItem = ({value, deleteIt,id}) => {
  const [check,setCheck]=React.useState(id.checked)
  return(
    <>
    <hr className={styles.hr}/>
    <div className={styles.line} key={id}>
        <input type="checkbox" checked={check} onChange={(e) => {
          setCheck(e.target.checked)
        }}/>
        <h2 className={check ? styles.strike : ""}>{value}</h2>
        <button className={styles.delete} onClick={() => deleteIt(id)}>X</button>
    </div>
    </>
  )
}

export default TodoItem