import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 Nextjs Headless. All rights reserved.</p>
      <p>
        <a href="#">Privacy Policy</a> |
        <a href="#">Terms of Service</a>
      </p>
    </footer>
  )
}

export default Footer