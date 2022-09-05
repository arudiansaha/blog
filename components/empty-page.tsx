import styles from '../styles/empty.module.css'

export default function EmptyPage() {
  return (
    <>
      <div className={styles.emoji}>{`__φ(。。)`}</div>
      <p className={styles.text}>empty...</p>
    </>
  )
}
