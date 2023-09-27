import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import TransactionPage, { loader as transactionPageLoader } from './pages/TransactionPage';
import RulesPage from './pages/RulesPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<App />}/>
    ,
    errorElement: <ErrorPage />
  },
  {
    path: "/transaction/:id",
    element: <Layout children={<TransactionPage />}/>
    ,
    loader: transactionPageLoader
  },
  {
    path: "/rules",
    element: <Layout children={<RulesPage />}/>
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
