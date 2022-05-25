import React from 'react'
import styles from "./todo.module.css"


const CompletedTodos = ({children}) => {
    const [show,setShow] =React.useState(false);
    // setComplete([...complete])
    // console.log(complete);
    // complete.map((todo) => {
    //     return todo;
    // })
    // console.log(show)

    // const CompletedList = () => {
    //     <p>Hi</p>
    // }
  return (
    <div>
        <button className={styles.showbutton} onClick={() => setShow(!show)}>Show Completed Todos</button>
        <div>
            {show && {children}
        // <div>{complete.map((todo) => {
        //     <h2>todo</h2>
        // })}</div>
        }
        </div>
    </div>
    
  )
}

export default CompletedTodos