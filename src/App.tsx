import { createBrowserRouter } from "react-router-dom"

import {Home} from './pages/Home'
import {Admin} from './pages/Admin'
import {Login} from './pages/Login'
import {NotFound} from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <NotFound/>
  }

])