import React from 'react'
import CompletedTodos from './CompletedTodos';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import ShowCompleted from './ShowCompleted';
import styles from "./todo.module.css"


const TodoApp = () => {
    const [todos,setTodos] = React.useState([]);
    const [completed, setCompleted] =React.useState([]);
    const [show,setShow] =React.useState(false);
    // console.log(show)

    const addTodo= (newTodo) => {
        todos.push({
            key: Date.now(),
            value: newTodo
        })
        setTodos([...todos]);
        // console.log(todos)
    }

    const deleteIt = (id) => {
        setTodos(todos.filter((todo) => todo.key!==id ))
        todos.map((todo) => {
            if(todo.key===id){
                completed.push({value:todo.value});
            }
        })
        setCompleted([...completed]);
        // console.log(completed);
    }

    const showComponents = completed.map((el) =>{
        //  => {
            // console.log(el.value);
            return (
            <div className={styles.left}>
                <li>{el.value}</li>
            </div>
            )
        })
        
    
  return (
    <div className={styles.main}>
        <TodoInput addTodo={addTodo}/>
        <TodoList>
            {todos.map((todo) =>{
            return <TodoItem value={todo.value} deleteIt={deleteIt} id={todo.key}/>
            })}
        </TodoList> 
        {/* <CompletedTodos> 
            {completed.map((deleted)=>{
                // console.log(todo)
            return <ShowCompleted complete={deleted.value}/>
        })}
        </CompletedTodos> */}
        <button className={styles.showbutton} onClick={() => setShow(!show)}>Show Completed Todos</button>
        {show && showComponents}
    </div>
  )
}

export default TodoApp