import { createContext, useState } from 'react'

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

const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(dataItems)
  const [cardInfo, setCardInfo] = useState({
    name: '',
    number: '',
    expiryDate: '',
    cvc: '',
  })
  const handleAmountChange = (id, action) => {
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
  const deliveryFee = 0
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    deliveryFee
  )

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        cardInfo,
        setCardInfo,
        handleAmountChange,
        deliveryFee,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
