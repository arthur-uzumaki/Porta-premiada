import styles from './Presente.module.css'

export function Presente(){
  return (
    <div className={styles.presente}>
        <div className={styles.topo}></div>
        <div className={styles.corpo}></div>
        <div className={styles.laco1}></div>
        <div className={styles.laco2}></div>
    </div>
  )
}