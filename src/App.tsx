import { BrowserRouter } from 'react-router-dom'
import { GlobalRoutes } from './routes/routes'
import GlobalStyle from './style/GlobalStyle'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
