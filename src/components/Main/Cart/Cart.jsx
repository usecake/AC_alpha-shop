import Products from './Products'
// import product1 from '../assets/img/product1.jpg'
// import product2 from '../assets/img/product2.jpg'
import styles from '../../../styles/Cart.module.scss'
import { useState } from 'react'
import {click} from '@testing-library/user-event/dist/click'

const dataItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 0,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 0,
  },
]
export default function Cart() {
  const [items, setItems] = useState(dataItems)
  const handleCount = (id, action) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(0, item.quantity + (action === 'plus' ? 1 : -1)),
          }
        }
        return item
      })
    )
  }
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <section className={`${styles['cart-container']} col col-lg-5 col-sm-12`}>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12' data-total-price={{}}>
        <Products
          items={items}
          handleCount={handleCount}
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
