import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home'
import { GlobalProvider } from './context/GlobalContext'

createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <Home/>
  </GlobalProvider>,
)
