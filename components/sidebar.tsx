import Link from 'next/link'
import styles from '../styles/sidebar.module.css'

export default function Sidebar() {
  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar')

    if (sidebar) {
      sidebar.style.display = 'none'
    }
  }

  return (
    <div id="sidebar" className={styles.wrapper}>
      <div className={styles.menuCloseWrapper}>
        <button onClick={closeSidebar} className={styles.menuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className={styles.navLink}>
        <Link href="/">
          <a onClick={closeSidebar}>Blog</a>
        </Link>
        <Link href="/about">
          <a onClick={closeSidebar}>About</a>
        </Link>
        <Link href="#contact">
          <a onClick={closeSidebar}>Contact</a>
        </Link>
      </nav>
    </div>
  )
}
