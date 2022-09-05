import styles from '../styles/post.module.css'

type Props = {
  content: string,
}

export default function PostBody({ content }: Props) {
  return <article className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
}
