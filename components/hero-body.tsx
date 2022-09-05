import Link from 'next/link'
import styles from '../styles/hero-post.module.css'
import Avatar from './avatar'
import Date from './date'
import type Author from '../interfaces/author'

type Props = {
  title: string,
  date: string,
  excerpt: string,
  author: Author,
  slug: string,
}

export default function HeroBody({
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className={styles.section}>
      <Link href={`/posts/${slug}`}>
        <a>
          <h2 className={styles.subTitle}>{title}</h2>
        </a>
      </Link>
      <div className={styles.sectionInfo}>
        <Avatar
          name={author.name}
          imageUrl={author.image}
        />
        <Date dateString={date} />
      </div>
      <p className={styles.excerpt}>
        {excerpt}
        <span>
          <Link href={`/posts/${slug}`}>
            <a>{` [...]`}</a>
          </Link>
        </span>
      </p>
    </section>
  )
}
