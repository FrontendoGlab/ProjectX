import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// styles
import "./styles/index.scss";

// pages
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/RegisterPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';



const rootElement = document.getElementById('root');

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>,
    errorElement: <NotFoundPage/> 
  }
]);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
} else {
  console.log("root element not found in DOM");
}


