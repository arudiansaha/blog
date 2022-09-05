import styles from '../styles/header.module.css'
import Navbar from './navbar'

type Props = {
  title: string,
}

export default function Header({ title }: Props) {
  return (
    <header className={styles.background}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <Navbar />
      </div>
    </header>
  )
}
