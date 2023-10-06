import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Main } from './pagine/Main.tsx';
import { ListaParti } from './pagine/ListaParti.tsx';
import { SingolaParte } from './pagine/SingolaParte.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts'
import init,  { CounterState } from "./assets/pkg/motore"

  await init()
 export const counter =  CounterState.new()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <ListaParti />,
      },
      {
        path: "/singolaparte/:indexParte",
        element: <SingolaParte />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}> 
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
