import styles from '../../styles/Main.module.scss'

export default function Main({ children }) {
  return (
    <main className='site-main'>
      <div className={`${styles['main-container']}`}>
        {children}
      </div>
    </main>
  )
}
