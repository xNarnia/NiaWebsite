import {
  RouterProvider,
} from 'react-router-dom'
import './css/bootstrap.min.css'
import './css/common.css'
import { router } from './router'
import ReactDOM from 'react-dom/client'
import React from 'react'

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
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)