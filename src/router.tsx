
import { createBrowserRouter } from "react-router-dom";
import Page404 from './routes/404.tsx';
import Home from './routes/Home.tsx'
import Resume from './routes/Resume.tsx';
import Portfolio from './routes/Portfolio.tsx'
import Github from "./routes/Github.tsx";
import Documentation from "./routes/Documentation.tsx";
import Socials from "./routes/Socials.tsx";
import About from "./routes/About.tsx";
import Root from "./routes/Root.tsx";
import config from "./appconfig.json"
import * as Icons from 'react-bootstrap-icons'

export const routes = [
  {
    name: "Home",
    path: '/',
    icon: <Icons.HouseFill />,
    element: <Home />,
    errorElement: <Page404 />
  },
  {
    name: "Portfolio",
    path: '/Portfolio',
    icon: <Icons.FolderFill />,
    element: <Portfolio />,
    errorElement: <Page404 />
  },
  {
    name: "Resume",
    path: '/Resume',
    icon: <Icons.JournalText />,
    element: <Resume />,
    errorElement: <Page404 />
  },
  {
    name: "Github",
    path: '/Github',
    icon: <Icons.Github />,
    element: <Github />,
    errorElement: <Page404 />
  },
  {
    name: "Docs",
    path: '/Documentation',
    icon: <Icons.ArchiveFill />,
    element: <Documentation />,
    errorElement: <Page404 />
  },
  {
    name: "Socials",
    path: '/Socials',
    icon: <Icons.EnvelopePaperHeartFill />,
    element: <Socials />,
    errorElement: <Page404 />
  },
  {
    name: "About",
    path: '/About',
    icon: <Icons.PersonFill />,
    element: <About />,
    errorElement: <Page404 />
  }
];

export const router = createBrowserRouter([{
  path: `${config.baseUrl}`,
  element: <Root />,
  children: routes.map((route) => ({
    index: route.path === '/',
    path: route.path === '/' ? undefined : `${config.baseUrl}${route.path}`,
    element: route.element,
  })),
}]);