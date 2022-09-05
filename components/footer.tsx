import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={styles.background}>
      <footer className={styles.wrapper}>
        <ul id="contact" className={styles.social}>
          <Link href="https://twitter.com/arudiansaha">
            <a>🐦 Twitter</a>
          </Link>
          <Link href="https://github.com/arudiansaha">
            <a>🐙 Github</a>
          </Link>
          <Link href="https://linkedin.com/">
            <a>💼 LinkedIn</a>
          </Link>
          <Link href="mailto: rizkyardiansyah@disroot.org">
            <a>📧 E-Mail</a>
          </Link>
        </ul>
      </footer>
    </div>
  )
}
