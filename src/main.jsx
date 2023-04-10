import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import Banner from './components/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '',
        element: <Banner></Banner>
      },
      // {
      //   path: '',
      //   element: <FeaturedJobs></FeaturedJobs>,
      //   loader: () => fetch('data.json')
      // },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      // {
      //   path: '/job/:id',
      //   element: <JobDetails></JobDetails>
      // }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
