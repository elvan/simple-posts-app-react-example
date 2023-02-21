import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NewPost from './components/NewPost';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-post',
    element: <NewPost />,
  },
]);

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
