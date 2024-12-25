import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Specialisation from './components/Specialisation';
import Hospitals from './components/Hospitals';
import Download from './components/Download';
import Families from './components/Families';
import Router from './router/router';

const AppLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Faq />
      <Download />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Router /> },
      { path: '/find-doctors', element: <Hospitals /> },
      { path: '/my-bookings', element: <Hospitals /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
