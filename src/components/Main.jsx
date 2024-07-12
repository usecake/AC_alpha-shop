import StepProgress from './stepProgress'
import Step from './Step'
import ProgressControl from './ProgressControl'

export default function Main({ children }) {
  return (
    <main className='site-main'>
      <div className='main-container'>{children}</div>
    </main>
  )
}
