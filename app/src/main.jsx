import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
