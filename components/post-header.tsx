import Image from 'next/image'
import Avatar from './avatar'
import Date from './date'
import type Author from '../interfaces/author'
import styles from '../styles/post.module.css'

type Props = {
  title: string,
  coverImage: string,
  author: Author,
  date: string,
}

export default function PostHeader({
  title,
  coverImage,
  author,
  date,
}: Props) {
  const hasCoverImage = coverImage ? <Image className={styles.coverImage} src={coverImage} alt="" width="1600" height="900" loading="lazy" /> : ''

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {hasCoverImage}
      <div className={styles.articleInfo}>
        <Avatar
          name={author.name}
          imageUrl={author.image}
        />
        <Date dateString={date} />
      </div>
    </header>
  )
}
