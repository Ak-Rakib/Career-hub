import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
import Statistics from './Pages/Statistics/Statistics'
import AppliedJob from './Pages/AppliedJob/AppliedJob'
import Blog from './Pages/Blog/Blog'
import ShowDetails from './Pages/ShowDetails/ShowDetails'
import FeatureJob from './Pages/Home/FeatureJob/FeatureJob'
import commonFunctionForGetDetailsData from './Loaders/CommonLoaderFunction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('assignmentGraphChart.json')
      },

      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader: commonFunctionForGetDetailsData
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: '/',
        element: <FeatureJob></FeatureJob>
      },

      {
        path: "/showDetails",
        element: <ShowDetails></ShowDetails>,
        loader: commonFunctionForGetDetailsData
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
