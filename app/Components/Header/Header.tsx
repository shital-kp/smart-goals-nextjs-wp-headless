import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>
        <Link href="/">Headless</Link>
      </p>
      <ul className={styles.nav}>
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about">About</Link></li>
      </ul>
    </header>
  )
}

export default Header