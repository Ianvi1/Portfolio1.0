import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Projects from './routes/Projects.tsx';
import ErrorPage from './routes/ErrorPage.tsx';

const router = createBrowserRouter([
  { path: '/',
    element:<App/>, 
    errorElement:<ErrorPage/>,
    children: [
  {
    path: '/',
    element: <Home/>
      },
  { path: '/projects',
    element:<Projects/> 
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
