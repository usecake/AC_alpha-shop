import styles from '../../../styles/Register.module.scss'
import Form from '../Register/Form'
import ProgressBar from './ProgressBar'
export default function Register({ stepPhase }) {
  return (
    <section
      className={`${styles['register-container']} col col-lg-6 col-sm-12`}
      data-phase={stepPhase}
      data-total-price='0'>
      <h2 className='register-title col col-12'>結帳</h2>
      <ProgressBar stepPhase={stepPhase} />
      <Form stepPhase={stepPhase} />
    </section>
  )
}