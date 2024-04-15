import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ViewProperty from './Components/View-property/ViewProperty';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Contact from './Components/Contact/Contact';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        element: <PropertyDetails> </PropertyDetails>,
        loader: () => fetch('../fake.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
