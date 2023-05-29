import React from 'react'
import styles from './Tasklist.module.scss'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>
        Hoàn thành 
      </h2>
      <div className={styles.tasks}>
      <div className={styles.task}>
         <input type="checkbox"  />
         <span className={styles.taskName}>Học bài</span>
         <div className={styles.taskActions}>
          <button className={styles.taskBtn}>
            🖊️
          </button>
          <button className={styles.taskBtn}>
          🗑️
          </button>
         </div>
        </div>
      </div>
    </div>
  )
}
