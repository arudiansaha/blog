import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  const showSidebar = () => {
    const sidebar = document.getElementById('sidebar')

    if (sidebar) {
      sidebar.style.display = 'block'
    }
  }
  return (
    <>
      <nav className={styles.navLink}>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </nav>
      <button onClick={showSidebar} className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </>
  )
}
