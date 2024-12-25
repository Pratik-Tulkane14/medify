import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Hospitals from './components/Hospitals.tsx'
import Layout from './components/Layout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "find-doctors",
        element: <Hospitals />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)