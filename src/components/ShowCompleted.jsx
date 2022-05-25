import React from 'react'
import styles from "./todo.module.css"


const ShowCompleted = ({complete}) => {
    // console.log(complete)
  return (
    <div>{complete}</div>
  )
}

export default ShowCompleted