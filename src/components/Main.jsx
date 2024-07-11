import StepProgress from './stepProgress'
import Step from './Step'
import ProgressControl from './ProgressControl'

export default function Main() {
  return (
    <main className='site-main'>
      <div className='main-container'>
          <StepProgress />
          <Step />
          <ProgressControl />
      </div>
    </main>
  )
}