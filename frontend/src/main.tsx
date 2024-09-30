import { createRoot } from 'react-dom/client'
import './index.css'
import { Cadastro } from './pages/Cadastro'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ListagemProdutos } from './pages/ListagemProdutos'
import { StrictMode } from 'react'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Cadastro/>
  },
  {
    path: "/lista",
    element: <ListagemProdutos/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
