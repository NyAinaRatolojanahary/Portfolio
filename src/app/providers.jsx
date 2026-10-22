import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

function Providers() {
  return <RouterProvider router={router} />
}

export default Providers