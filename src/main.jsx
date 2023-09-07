import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router';
import AuthProvider from './assets/provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='w-full mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>


  </React.StrictMode>,
)
