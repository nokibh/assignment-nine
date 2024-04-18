import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Contact from './Components/Contact/Contact';
import PropertyDetails from './Components/PropertyDetails/PropertyDetails';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/update',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            {' '}
            <Contact></Contact>
          </PrivateRoute>
        ),
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
        path: '/Card/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails> </PropertyDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('../fake.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
