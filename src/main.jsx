import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './Components/Phones';
import Phone from './Components/Phone';
import Main from './Components/Main';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [

      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch('http://localhost:5000/phones')
      },
      {
        path: "/phone/:id",
        element: <Phone />,
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)

      }

    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
