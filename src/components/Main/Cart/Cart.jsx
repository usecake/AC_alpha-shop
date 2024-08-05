import Products from './Products'
// import product1 from '../assets/img/product1.jpg'
// import product2 from '../assets/img/product2.jpg'
import styles from '../../../styles/Cart.module.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {
  const { items, totalPrice, handleAmountChange } = useContext(CartContext)

  return (
    <section className={`${styles['cart-container']} col col-lg-5 col-sm-12`}>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12' data-total-price={{}}>
        <Products
          items={items}
          handleAmountChange={handleAmountChange}
        />
      </section>
      <section className='cart-info shipping col col-12'>
        <div className='text'>運費</div>
        <div className='price'></div>
      </section>
      <section className='cart-info total col col-12'>
        <div className='text'>小計</div>
        <div className='price'>{totalPrice}</div>
      </section>
    </section>
  )
}
