import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import RouteNotFound from "./pages/RouteNotFound/RouteNotFound.tsx"

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    "path": '/',
    element: <Layout />,
    errorElement: <RouteNotFound />,
    children: [
      {
        path: "/about",
        element: <App />
      },
      {
        path: "/",
        element: <App />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
