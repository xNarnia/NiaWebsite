import {
  RouterProvider,
} from 'react-router-dom'
import './css/bootstrap.min.css'
import './css/common.css'
import { router } from './router'
import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'

/* 
  Notable Files / Structure
  -- ./routes/*     -> HTML content for website
                        -- 404 page is found here
  -- ./router.tsx   -> Route assignments
                        -- Main "root" placeholder to hold content can be found here
  -- ./components/* -> Reusable objects
  -- ./css/*        -> Contains CSS for various pages. 
                       -- common.css contains css that span across all pages 
*/
export const NavbarHiddenContext = React.createContext({
  navbarHidden: true,
  setNavbarHidden: (isHidden) => {}
});

const App = () => {
  const [navbarHidden, setNavbarHidden] = useState(true);
  const value = { navbarHidden, setNavbarHidden };

  return (
    <>
      <React.StrictMode>
        <NavbarHiddenContext.Provider value={value}>
          <RouterProvider router={router} />
        </NavbarHiddenContext.Provider>
      </React.StrictMode>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)