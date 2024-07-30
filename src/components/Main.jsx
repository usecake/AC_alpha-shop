import styles from '../styles/Main.module.scss'

export default function Main({ children }) {
  return (
    <main className={`${styles['site-main']}`}>
      <div className='main-container'>{children}</div>
    </main>
  )
}
