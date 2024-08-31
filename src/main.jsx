import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Resume from "./page/Resume.jsx";
import Contact from "./page/Contact.jsx";
import Login from "./page/login.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { element: <Home />, path: "/" },
      {
        path: "resume",
        element: <Resume />,
      },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
