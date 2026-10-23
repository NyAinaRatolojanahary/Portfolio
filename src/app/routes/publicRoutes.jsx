import NotFound from '../../components/common/NotFound.jsx'
import AboutPage from '../../features/about/pages/AboutPage.jsx'
import HomePage from '../../features/home/pages/HomePage.jsx'
import ProjectsPage from '../../features/projects/pages/ProjectsPage.jsx'
import SkillsPage from '../../features/skills/pages/SkillsPage.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'a-propos', element: <AboutPage /> },
      { path: 'competences', element: <SkillsPage /> },
      { path: 'projets', element: <ProjectsPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default publicRoutes