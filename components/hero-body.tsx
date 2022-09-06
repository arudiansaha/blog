import Link from 'next/link'
import styles from '../styles/hero-post.module.css'

type Props = {
  excerpt: string,
  slug: string,
}

export default function HeroBody({
  excerpt,
  slug,
}: Props) {
  return (
    <section className={styles.section}>
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
