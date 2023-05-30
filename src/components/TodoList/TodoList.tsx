import React from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <div className={styles.todolistContainer}>
        TodoList
        <TaskInput />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
