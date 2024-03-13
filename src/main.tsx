import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import ErrorPage from './routes/ErrorPage.tsx';

import {register} from 'swiper/element-bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const router = createBrowserRouter([
  { path: '/',
    element:<App/>, 
    errorElement:<ErrorPage/>,
    children: [
  {
    path: '/',
    element: <Home/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
