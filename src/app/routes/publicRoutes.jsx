import NotFound from '../../components/common/NotFound.jsx'
import HomePage from '../../features/home/pages/HomePage.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default publicRoutes