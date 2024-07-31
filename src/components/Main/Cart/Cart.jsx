import Products from './Products'
// import product1 from '../assets/img/product1.jpg'
// import product2 from '../assets/img/product2.jpg'
import styles from '../../../styles/Cart.module.scss'

const dataItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]
export default function Cart() {
  const totalPrice = dataItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <section className={`${styles['cart-container']} col col-lg-5 col-sm-12`}>
      <h3 className='cart-title'>購物籃</h3>
      <section className='product-list col col-12' data-total-price='0'>
        <Products items={dataItems} />
      </section>
      <section className='cart-info shipping col col-12'>
        <div className='text'>運費</div>
        <div className='price'></div>
      </section>
      <section className='cart-info total col col-12'>
        <div className='text'>小計</div>
        <div className='price'>${totalPrice}</div>
      </section>
    </section>
  )
}
