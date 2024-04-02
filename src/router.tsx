
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

export const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    errorElement: <Page404 />
  },
  {
    name: "Portfolio",
    path: "/Portfolio",
    element: <Portfolio />,
    errorElement: <Page404 />
  },
  {
    name: "Resume",
    path: "/Resume",
    element: <Resume />,
    errorElement: <Page404 /> 
  },
  {
    name: "Github",
    path: "/Github",
    element: <Github />,
    errorElement: <Page404 /> 
  },
  {
    name: "Documentation",
    path: "/Documentation",
    element: <Documentation />,
    errorElement: <Page404 /> 
  },
  {
    name: "Socials",
    path: "/Socials",
    element: <Socials />,
    errorElement: <Page404 /> 
  },
  {
    name: "About",
    path: "/About",
    element: <About />,
    errorElement: <Page404 /> 
  }
];

export const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: routes.map((route) => ({
    index: route.path === '/',
    path: route.path === '/' ? undefined : route.path,
    element: route.element,
  })),
}]);