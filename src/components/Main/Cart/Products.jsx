import minus from '../../../assets/minus.svg'
import plus from '../../../assets/plus.svg'
import styles from '../../../styles/Products.module.scss'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Products() {
  const { items, handleAmountChange } = useContext(CartContext)
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles['product-container']} col col-12`}
          data-price={item.price}>
          <img className='img-container' src={item.img} alt={item.name} />
          <div className='product-info'>
            <div className='product-name'>{item.name}</div>
            <div className='product-control-container'>
              <div className='product-control'>
                <img
                  className='product-action'
                  src={minus}
                  alt='minus.svg'
                  onClick={() => handleAmountChange(item.id, 'minus')}
                />
                <span className='product-count'>{item.quantity}</span>
                <img
                  className='product-action'
                  src={plus}
                  alt='plus.svg'
                  onClick={() => handleAmountChange(item.id, 'plus')}
                />
              </div>
            </div>
          </div>
          <div className='price'>${item.price}</div>
        </div>
      ))}
    </>
  )
}

export default Products
