import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.css';
import {HomePage} from "./pages/HomePage/index.jsx";
import ReservationPage from "./pages/ReservationPage/index.jsx";

/*Uvnitř komponenty App již máte připravenou strukturu s hlavičkou a patičkou stránky. Mezi ně budeme pomocí Outlet vkládat naše stránky. Stránku HomePage již míte připravenou. Vložte ji do routeru jako dítě routy / v hlavním index.jsx. Stránku HomePage chceme umístit na adresu: /. Vyzkoušejte, že se vaše stránka správně zobrazuje. Měli byste vidět formulář pro vyhledání spojení.

Dále vytvořte komponentu ReservationPage. Tuto komponentu zobrazte na adrese /reservation. Zatím může také vracet pouze nadpis h2, abychom viděli, že se na stránce něco děje. Obsah komponenty vytvoříme později.*/

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      }
    ],
  },
  {
    path: '/reservation',
    element: <ReservationPage/>,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
