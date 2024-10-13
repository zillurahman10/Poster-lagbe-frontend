import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './pages/home/home.jsx';
import { RegistrationForm } from './pages/authentication/register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/register",
    element: <RegistrationForm></RegistrationForm>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
