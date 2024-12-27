import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hospitals from "./components/Hospitals";
import Download from "./components/Download";
import Mybookings from "./pages/Mybookings";
import Notice from "./components/Notice";
import Router from "./router/Router";
import MobileNavbar from "./components/MobileNavbar";

const AppLayout: React.FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);
  return (
    <div >
      <Notice />
      {isMobileNavVisible ?
        <MobileNavbar setIsMobileNavVisible={setIsMobileNavVisible} />
        : <Navbar setIsMobileNavVisible={setIsMobileNavVisible} />
      }
      <main>
        <Outlet />
      </main>
      <Download />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Router /> },
      { path: "/find-doctors", element: <Hospitals /> },
      { path: "/my-bookings", element: <Mybookings /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
