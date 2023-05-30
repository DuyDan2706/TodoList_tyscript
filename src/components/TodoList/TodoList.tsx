import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList/TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {

  const [todos, setTodos] = useState<Todo[]>([])

  const donTodo = todos.filter(todo => todo.done)
  const notdoneTodo = todos.filter(todo => !todo.done)

  const addtodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
      
    }
    setTodos(prev => ([...prev, todo]))
  }

  const handchangeTodo = (id: string, done: boolean) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id == id) {
          return { ...todo, done: done }
        }
        return todo
      })
    })
  }

  console.log(todos)
  return (
    <div className={styles.todoList}>
      <div className={styles.todolistContainer}>
        TodoList
        <TaskInput addTodo={addtodo} />
        <TaskList todos={notdoneTodo} handchangeTodo={handchangeTodo}/>
        <TaskList todos={donTodo} handchangeTodo={handchangeTodo} />
      </div>
    </div>
  )
}
