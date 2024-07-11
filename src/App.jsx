// 引入全局 CSS
import 'normalize.css'
import './styles/index.scss'
// 引入元件
import Main from './components/Main'
import StepProgress from './components/stepProgress'
import Step from './components/Step'
import ProgressControl from './components/ProgressControl'

function App() {
  return (
      <Main>
        <StepProgress />
        <Step />
        <ProgressControl />
      </Main>
  )
}
export default App
