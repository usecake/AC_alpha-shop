// 引入全局 CSS
// import 'normalize.css'
import './styles/index.scss'
// 引入元件
import Main from './components/Main/Main'
import Register from './components/Main/Register/Register'
import Cart from './components/Main/Cart/Cart'
import ProgressControl from './components/Main/ProgressControl'

function App() {
  return (
    <Main>
      <Register />
      <Cart />
      <ProgressControl />
    </Main>
  )
}
export default App
