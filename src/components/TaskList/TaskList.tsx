import React, { useState } from 'react'
import styles from './Tasklist.module.scss'
import { Todo } from '../../@types/todo.type'
interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
  handchangeTodo: (id: string, done: boolean) => void
}



export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, handchangeTodo } = props
  
  const onchangeCheckbox =(idTodo:string)=> (event:React.ChangeEvent<HTMLInputElement>)=>{
           handchangeTodo(idTodo,event.target.checked)
  }

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map(todo => (
          <div className={styles.task} key={todo.id}>
            <input type='checkbox' className={styles.taskcheckbox} checked={todo.done} onChange={onchangeCheckbox(todo.id)} />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn}>🖊️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}


      </div>
    </div>
  )
}
