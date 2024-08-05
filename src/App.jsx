import { useState } from 'react'
// 引入全局 CSS
import './styles/index.scss'
// 引入元件
import { CartProvider } from './components/Context/CartContext'
import Main from './components/Main/Main'
import Register from './components/Main/Register/Register'
import Cart from './components/Main/Cart/Cart'
import ProgressControl from './components/Main/ProgressControl'

function App() {
  const [stepPhase, setStepPhase] = useState(1)
  const handleClick = (e) => {
    if (stepPhase < 1 || stepPhase > 3) {
      return
    }
    if (e.target.classList.contains('next')) {
      setStepPhase(stepPhase + 1)
    } else if (e.target.classList.contains('prev')) {
      setStepPhase(stepPhase - 1)
    }
  }
  return (
    <Main>
      <CartProvider>
        <Register stepPhase={stepPhase} />
        <Cart />
        <ProgressControl stepPhase={stepPhase} handleClick={handleClick} />
      </CartProvider>
    </Main>
  )
}
export default App
