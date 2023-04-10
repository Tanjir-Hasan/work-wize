import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './components/Home';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import Banner from './components/Banner';
import JobDetails from './components/JobDetails';
import Applied from './components/Applied';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '',
        element: <Banner></Banner>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => (fetch('/data.json'))
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const data = await res.json();
          const singleData = data.find(single => single.id == params.id);
          if (!singleData) {
            return {}
          }
          else {
            return singleData;
          }
        }
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
