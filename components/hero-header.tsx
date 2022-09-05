import styles from '../styles/hero-post.module.css'

type Props = {
  title: string,
  description?: string,
}

export default function HeroHeader({ title, description }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>
  )
}
