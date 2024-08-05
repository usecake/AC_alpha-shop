import styles from '../../styles/ProgressControl.module.scss'
import rightArrow from '../../assets/right-arrow.svg'
import leftArrow from '../../assets/left-arrow.svg'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export default function ProgressControl({ handleClick, stepPhase }) {
  const { cardInfo } = useContext(CartContext) || {}
  const handleLogInfo = () => {
    console.log(cardInfo)
  }
  return (
    <section
      className={`${styles['progress-control-container']} col col-lg-6 col-sm-12`}>
      {stepPhase === 1 && (
        <section className='button-group col col-12' data-phase='address'>
          <button className='next' onClick={handleClick}>
            下一步
            <img src={rightArrow} alt='rightArrow'></img>
          </button>
        </section>
      )}
      {stepPhase === 2 && (
        <section className='button-group col col-12' data-phase='shipping'>
          <button className='prev' onClick={handleClick}>
            <img src={leftArrow} alt='leftArrow'></img>
            上一步
          </button>
          <button className='next' onClick={handleClick}>
            下一步
            <img src={rightArrow} alt='rightArrow'></img>
          </button>
        </section>
      )}
      {stepPhase === 3 && (
        <section className='button-group col col-12' data-phase='credit-card'>
          <button className='prev' onClick={handleClick}>
            <img src={leftArrow} alt='leftArrow'></img>
            上一步
          </button>
          <button className='next' onClick={handleLogInfo}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}
