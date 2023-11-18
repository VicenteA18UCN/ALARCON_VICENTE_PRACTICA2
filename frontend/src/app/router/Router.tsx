import { createBrowserRouter, Navigate } from "react-router-dom";
import Portfolio from "../../features/Portfolio";
import App from "../layout/App";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Navigate to="/portfolio" /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);

export default Router;
