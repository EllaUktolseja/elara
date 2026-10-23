import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Skills from '../pages/Skills.jsx'
import Projects from '../pages/Projects.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'
import Contact from '../pages/Contact.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])
