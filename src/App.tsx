import { BrowserRouter } from 'react-router-dom'
import { GlobalRoutes } from './routes/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
