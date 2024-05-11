import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.css';
import {HomePage} from "./pages/HomePage/index.jsx";
import ReservationPage from "./pages/ReservationPage/index.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'reservation',
        element: <ReservationPage/>,
      },
      {
        path: 'reservation/:id',
        element: <p>Detail rezervace</p>,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
