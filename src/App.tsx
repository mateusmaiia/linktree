import { createBrowserRouter } from "react-router-dom"

import {Home} from './pages/Home'
import {Admin} from './pages/Admin'
import {Login} from './pages/Login'
import {NotFound} from './pages/NotFound'
import { Private } from "./router/Private"
import { Networks } from "./pages/Networks"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private> //vai passar primeiro pelo private, se o private permitir ele vai renderizar o children
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:"/admin/social",
    element: <Private><Networks /></Private> //Private pode ficar ao redor de qualquer Página agora.  PROTEÇÃO DE ROTA
  },
  {
    path: '*',
    element: <NotFound/>
  }

])