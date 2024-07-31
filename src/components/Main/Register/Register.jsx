import styles from '../../../styles/Register.module.scss'
import Form from '../Register/Form'
import Progress from '../Register/Progress'
export default function Register() {
  return (
    <section
      className={`${styles['register-container']} col col-lg-6 col-sm-12`}
      data-phase='1'
      data-total-price='0'>
      <h2 className='register-title col col-12'>結帳</h2>
      <Progress />
      <Form />
    </section>
  )
}
