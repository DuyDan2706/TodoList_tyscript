import React, { useState } from 'react'
import styles from './taskinput.module.scss'

interface TaskinputProps {
  addTodo:(name: string) => void
}



export default function TaskInput(props:TaskinputProps) {

const {addTodo}= props
const [name,setName]= useState<string>('')



const handSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault()
  addTodo(name)
  setName('')
}

const onchangeInput = (event:React.ChangeEvent<HTMLInputElement>)=>{
 const {value} = event.target
 setName(value)
}
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list tyscript</h1>
      <form className={styles.form} onSubmit={handSubmit}>
        <input type='text' placeholder='caption goes here' value={name} onChange={onchangeInput} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}

// immozi trên windown là window + ;
