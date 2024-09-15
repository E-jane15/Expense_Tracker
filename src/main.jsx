import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage/>
  },
  {
    path:'/signup',
    element: <SignUpPage/>
  },
  {
    path:'/login',
    element: <LoginPage/>
  },
  {
    path:'/dashboard',
    element: <DashboardPage/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
