import styles from '../styles/Main.module.scss'

export default function Main({ children }) {
  return (
    <main className={`${styles}`}>
      <div className='main-container'>{children}</div>
    </main>
  )
}
