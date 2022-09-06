import Link from 'next/link'
import styles from '../styles/hero-post.module.css'
import Avatar from './avatar'
import Author from '../interfaces/author'
import Date from './date'

type Props = {
  title: string,
  slug: string,
  author: Author,
  date: string,
}

export default function HeroHeader({ title, slug, author, date }: Props) {
  return (
    <header className={styles.header}>
      <Link href={`/posts/${slug}`}>
        <a>
          <h1 className={styles.title}>{title}</h1>
        </a>
      </Link>
      <div className={styles.sectionInfo}>
        <Avatar
          name={author.name}
          imageUrl={author.image}
        />
        <Date dateString={date} />
      </div>
    </header>
  )
}
