
import { createBrowserRouter } from "react-router-dom";
import Page404 from './routes/404.tsx';
import Home from './routes/Home.tsx'
import Bots from './routes/Bots.tsx';
import Portfolio from './routes/Portfolio.tsx'
import Github from "./routes/Github.tsx";
import Skills from "./routes/Skills.tsx";
import Socials from "./routes/Socials.tsx";
import About from "./routes/About.tsx";
import Root from "./routes/Root.tsx";
import config from "./appconfig.json"
import * as Icons from 'react-bootstrap-icons'

interface PageRoute {
  name: string,
  path: string,
  icon: JSX.Element,
  element: JSX.Element,
  errorElement: JSX.Element
}

export const routes:Array<PageRoute> = [
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
    name: "Skills",
    path: '/Skills',
    icon: <Icons.ArchiveFill />,
    element: <Skills />,
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
    name: "Bots",
    path: '/Bots',
    icon: <Icons.GearFill />,
    element: <Bots />,
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