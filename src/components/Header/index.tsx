import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/logo.png" alt="" className={styles.imgHeader} />
    </header>
  )
}